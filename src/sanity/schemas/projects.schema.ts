import { defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "stack",
      title: "Stack Description",
      type: "string",
    },
    {
      name: "type",
      title: "Project Type",
      type: "string",
    },
    {
      name: "previewLink",
      title: "Preview Link",
      type: "string",
    },
    {
      name: "previewImage",
      title: "Preview Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "repoLink",
      title: "Repository Link",
      type: "string",
    },
    {
      name: "responsive",
      title: "Responsiveness",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
});
