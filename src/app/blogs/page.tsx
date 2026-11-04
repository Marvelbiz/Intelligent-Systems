import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { BlogSearchFilter } from "@/components/blogs/BlogSearchFilter";
import { BookOpen } from "lucide-react";

// Cached helper function for Sanity data fetching
async function getPosts() {
  "use cache";
  return await client.fetch(POSTS_QUERY);
}

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-[#00205B] flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-[#D4AF37]" />
            <span>Departmental Blogs & News</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Explore articles, academic research insights, and announcements from OAU Intelligent Systems.
          </p>
        </div>

        <Link
          href="/studio"
          className="self-start md:self-auto bg-[#00205B] hover:bg-[#00153D] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow transition"
        >
          Publish Article in Studio
        </Link>
      </div>

      {/* Interactive Client Search & Post Grid */}
      <BlogSearchFilter initialPosts={posts} />

    </div>
  );
}