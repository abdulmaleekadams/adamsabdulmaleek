import { SchemaTypeDefinition } from "sanity";
import {
  AboutSchema,
  BlockContent,
  ExperienceSchema,
  ProjectSchema,
  SkillsSchema,
  WorkExpSchema,
} from "./schemas";

export const schemaTypes = [
  AboutSchema,
  ProjectSchema,
  ExperienceSchema,
  WorkExpSchema,
  SkillsSchema,
  BlockContent,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    AboutSchema,
    ProjectSchema,
    ExperienceSchema,
    WorkExpSchema,
    SkillsSchema,
    BlockContent,
  ],
};
