import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Research Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "leadInvestigator",
      title: "Lead Investigator",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "description",
      title: "Project Abstract",
      type: "text",
    }),
    defineField({
      name: "tags",
      title: "Research Domain Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g., Computer Vision, NLP, Robotics, Medical AI",
    }),
    defineField({
      name: "paperUrl",
      title: "Publication / Paper Link",
      type: "url",
    }),
  ],
});