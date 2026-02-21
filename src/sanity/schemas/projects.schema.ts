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
    {
      name: "problem",
      title: "Problem",
      type: "text",
      description: "The business or technical problem this project solves",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: 'Your role on this project, e.g. "Lead Engineer"',
    },
    {
      name: "techDecisions",
      title: "Tech Decisions",
      type: "blockContent",
      description: "Key technical choices made during the project",
    },
    {
      name: "impact",
      title: "Impact",
      type: "text",
      description: "Quantifiable outcomes and results",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show this project on the homepage",
      initialValue: false,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which to display on homepage (lower = first)",
    },
  ],
});
