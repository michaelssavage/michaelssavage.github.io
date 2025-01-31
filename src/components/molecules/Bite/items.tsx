import { Anchor } from "@/components/molecules/Anchor";
import type { IBite } from "@/types/Post";

export const bites: IBite[] = [
	{
		id: 11,
		title:
			"In June, I joined TalentBait as a frontend developer working with React.js, Reflux, Figma, and shared components across multiple projects",
		tag: "achievement",
		year: 2024,
	},
	{
		id: 10,
		title:
			"I deployed michaelsavage.ie gaining an understanding of AWS services like Amplify, Lambda, Gateway, DynamoDB, and Route 53",
		tag: "general",
		year: 2024,
	},
	{
		id: 9,
		title: "In March, I moved to Barcelona!",
		tag: "general",
		year: 2024,
	},
	{
		id: 8,
		title:
			"I organised two Plant Bass'd gigs in Galway and DJ'd the opening slots",
		tag: "hobby",
		year: 2024,
	},
	{
		id: 7,
		title: (
			<>
				Plant Bass'd received 11{" "}
				{
					<Anchor
						text="Resident Advisor Top Picks"
						variant="link"
						link="https://ra.co/promoters/103854/past-events"
						isExternal
					/>
				}{" "}
				for the gigs in Scotland
			</>
		),
		link: "https://ra.co/promoters/103854/past-events",
		tag: "hobby",
		year: 2023,
	},
	{
		id: 6,
		title: "I earned the Professional Scrum Master™ I (PSM I) certificate",
		tag: "achievement",
		year: 2022,
	},
	{
		id: 5,
		title:
			"I graduated with a 1.1 in Bsc. in Computer Applications from Dublin City University",
		tag: "achievement",
		year: 2021,
	},
	{
		id: 4,
		title:
			"My team in 4th year of university was awarded best group research paper on the topic of Global Software Engineering",
		tag: "achievement",
		year: 2021,
	},
	{
		id: 3,
		title:
			"The world came to a halt. So I climbed Carrauntoohil, Croagh Patrick, and cycled from Monaghan to Galway (200km)",
		tag: "achievement",
		year: 2020,
	},
	{
		id: 2,
		title:
			"I won the Ulster Rugby Divison 1. League & Cup and Nutty Crust Tournament with Armagh Rugby Club u18's",
		tag: "achievement",
		year: 2017,
	},
	{
		id: 1,
		title:
			"I represented Ulster Club Rugby u18s by starting at no.11 in the Inter-Provincial series",
		tag: "achievement",
		year: 2015,
	},
];
