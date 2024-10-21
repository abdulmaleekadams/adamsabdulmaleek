import { defineQuery } from "groq";
import {
  AboutQueryResult,
  ExpQueryResult,
  ProjectsQueryResult,
} from "../../../sanity.types";
import { getClient } from "./sanity.client";

const client = getClient();

const projectsQuery = defineQuery(
  `*[_type == "projects"] | order(_createdAt desc)`
);

const aboutQuery = defineQuery(`*[_type == "about"] | order(_createdAt desc)`);
const expQuery = defineQuery(`*[_type == "exp"] | order(_createdAt desc)`);

export const getProjects = async (): Promise<ProjectsQueryResult> => {
  return await client.fetch(projectsQuery);
};

export const getExperience = async (): Promise<ExpQueryResult> => {
  return await client.fetch(expQuery);
};

export const getAbout = async (): Promise<AboutQueryResult> => {
  return await client.fetch(aboutQuery);
};
