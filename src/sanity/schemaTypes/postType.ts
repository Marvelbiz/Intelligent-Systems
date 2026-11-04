import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blogs & News",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Article Title",
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
      name: "author",
      title: "Author / Speaker",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Departmental News", value: "news" },
          { title: "AI Research", value: "research" },
          { title: "Student Blog", value: "student" },
          { title: "Seminars & Workshops", value: "events" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Summary / Excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Article Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    }),
  ],
});