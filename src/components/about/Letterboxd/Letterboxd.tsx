import { fetchFavouriteMovies } from "@/api/fetch-favorite-movies";
import { Anchor } from "@/components/Anchor";
import { Picture } from "@/components/Picture";
import { Group } from "@/components/atoms/Group";
import type { IMovie } from "@/types/Movie";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { breakpoint } from "../utils";
import {
  Button,
  ButtonContainer,
  Card,
  CardStack,
  StackContainer,
} from "./Letterboxd.styled";

export const Letterboxd = () => {
  const { data } = useQuery<Array<IMovie>>({
    queryKey: ["favorites"],
    queryFn: fetchFavouriteMovies,
    refetchOnWindowFocus: false,
  });

  const [active, setActive] = useState(0);

  const handleButtonClick = (index: number) => {
    setActive(index);
  };

  if (!data || data.length === 0) {
    return (
      <p>
        I love watching, sharing and keeping track of movies on Letterboxd (the
        best social media platform). Some of my favourites include Amélie, Y Tu
        Mamá También, Aftersun, and Sexy Beast.
      </p>
    );
  }

  return (
    <Group align="center" gap="2rem" style={breakpoint}>
      <StackContainer>
        <CardStack>
          {data.map((movie, index) => (
            <Card
              key={`${movie.title}-${index}`}
              to={movie.movieurl}
              index={index}
              active={active}
            >
              <Picture src={movie.imageurl} alt={movie.title} />
            </Card>
          ))}
        </CardStack>
      </StackContainer>

      <div>
        <p>
          I love watching, sharing and keeping track of movies on Letterboxd
          (the best social media platform). Some of my favourites include{" "}
          {data.map((movie, index) => (
            <>
              <Anchor
                key={movie.title}
                link={movie.movieurl}
                text={movie.title}
                variant={index === active ? "link" : "text"}
              />
              {index < data.length - 1 && ", "}
            </>
          ))}
          .
        </p>
        <ButtonContainer>
          {data.map((movie, index) => (
            <Button
              key={movie.title}
              isActive={index === active}
              onClick={() => handleButtonClick(index)}
            >
              {index + 1}
            </Button>
          ))}
        </ButtonContainer>
      </div>
    </Group>
  );
};
