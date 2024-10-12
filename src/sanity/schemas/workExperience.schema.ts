import { defineType } from "sanity";

export default defineType({
  name: "workExp",
  title: "Work Experience",
  type: "document",
  fields: [
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "contribution",
      title: "Contribution",
      type: "string",
    },
    {
      name: "company",
      title: "Comapny",
      type: "string",
    },
  ],
});
