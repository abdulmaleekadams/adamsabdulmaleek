import { defineType } from "sanity";

export default defineType({
  name: "exp",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "workExp" }],
    },
  ],
});
