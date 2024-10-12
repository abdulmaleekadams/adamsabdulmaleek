import { defineQuery } from "groq";
import { ExpQueryResult, ProjectsQueryResult } from "../../../sanity.types";
import { getClient } from "./sanity.client";

// export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

// export async function getPosts(client: SanityClient): Promise<Post[]> {
//   return await client.fetch(postsQuery);
// }

// export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

// export async function getPost(
//   client: SanityClient,
//   slug: string
// ): Promise<Post> {
//   return await client.fetch(postBySlugQuery, {
//     slug,
//   });
// }

// export const postSlugsQuery = groq`
// *[_type == "post" && defined(slug.current)][].slug.current
// `;

// export interface Post {
//   _type: "post";
//   _id: string;
//   _createdAt: string;
//   title?: string;
//   slug: Slug;
//   excerpt?: string;
//   mainImage?: ImageAsset;
//   body: PortableTextBlock[];
// }

const client = getClient();

const projectsQuery = defineQuery(
  `*[_type == "projects"] | order(_createdAt desc)`
);
const expQuery = defineQuery(`*[_type == "exp"] | order(_createdAt desc)`);

export const getProjects = async (): Promise<ProjectsQueryResult> => {
  return await client.fetch(projectsQuery);
};

export const getExperience = async (): Promise<ExpQueryResult> => {
  return await client.fetch(expQuery);
};

export type BookType = {
  coverImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  price: number;
  categories: { slug: { current: string; _type: string }; title: string }[];
  _rev: string;
  _type: string;
  _id: string;
  title: string;
  _updatedAt: Date | string;
  slug: {
    current: string;
    _type: "slug";
  };
  _createdAt: Date | string;
};
