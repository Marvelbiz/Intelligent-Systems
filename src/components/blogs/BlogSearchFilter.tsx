"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Search, Calendar, User, Tag } from "lucide-react";

interface BlogSearchFilterProps {
  initialPosts: any[];
}

export function BlogSearchFilter({ initialPosts }: BlogSearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { label: "All Categories", value: "all" },
    { label: "Departmental News", value: "news" },
    { label: "AI Research", value: "research" },
    { label: "Student Blog", value: "student" },
    { label: "Seminars & Workshops", value: "events" },
  ];

  // Filter posts based on user search term and category
  const filteredPosts = initialPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles, topics, or AI research..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00205B]"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition ${
                selectedCategory === cat.value
                  ? "bg-[#00205B] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Results */}
      {filteredPosts.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 p-12 rounded-xl text-center space-y-2">
          <p className="font-semibold text-slate-700">No matching articles found.</p>
          <p className="text-xs text-slate-500">Try adjusting your search query or selecting a different category filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post: any) => (
            <article
              key={post._id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              {post.mainImage && (
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="inline-block bg-[#00205B]/10 text-[#00205B] text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                    {post.category || "General"}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 hover:text-[#00205B] transition leading-snug">
                    <Link href={`/blogs/${post.slug.current}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{post.authorName || "Faculty"}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "Recent"}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}