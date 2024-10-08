import type { Handler } from "@netlify/functions";
import jwt, { type Secret } from "jsonwebtoken";
import { MongoClient } from "mongodb";

const handler: Handler = async (event, context) => {
  const authResult = isValidAuth(event.headers.authorization);
  if (!authResult.isValid) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: authResult.error }),
    };
  }
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const database = client.db("letterboxd");
    const collection = database.collection("favorites");

    const movies = await collection.find().toArray();
    const favourites = movies.flatMap((movie) => movie.movies);

    return {
      statusCode: 200,
      body: JSON.stringify(favourites),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching favorites" }),
    };
  } finally {
    await client.close();
  }
};

const isValidAuth = (authHeader?: string) => {
  if (!authHeader) {
    return { isValid: false, error: "Authorization header required" };
  }

  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return { isValid: false, error: "Invalid authorization header" };
  }

  const token = tokenParts[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.LETTERBOXD_JWT_SECRET as Secret
    );
    if (
      typeof decoded === "string" ||
      !decoded.username ||
      decoded.username !== process.env.LETTERBOXD_USERNAME
    ) {
      throw new Error("Invalid username");
    }
    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: "Invalid token" };
  }
};

export { handler };