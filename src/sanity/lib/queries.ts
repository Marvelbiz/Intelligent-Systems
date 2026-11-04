import { groq } from "next-sanity";

// Fetch all published blog posts
export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    publishedAt,
    excerpt,
    mainImage,
    "authorName": author->name,
    "authorImage": author->image
  }
`;

// Fetch a single blog post by slug
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    publishedAt,
    excerpt,
    mainImage,
    body,
    author->{
      name,
      role,
      image,
      bio
    }
  }
`;

// Fetch all faculty members
export const FACULTY_QUERY = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    slug,
    role,
    image,
    bio,
    email
  }
`;

// Fetch featured research projects
export const PROJECTS_QUERY = groq`
  *[_type == "project"] {
    _id,
    title,
    slug,
    description,
    tags,
    paperUrl,
    "lead": leadInvestigator->name
  }
`;