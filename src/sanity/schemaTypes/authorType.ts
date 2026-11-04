import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Faculty & Researchers",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Academic / Administrative Role",
      type: "string",
      description: "e.g., Professor of AI, Senior Lecturer, Lab Director",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Biography & Research Focus",
      type: "text",
    }),
    defineField({
      name: "email",
      title: "OAU Email Address",
      type: "string",
    }),
  ],
});