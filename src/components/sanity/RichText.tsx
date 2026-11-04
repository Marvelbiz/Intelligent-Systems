import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Article Image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-[#00205B] mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-[#00205B] mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-slate-800 mt-4 mb-2">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#D4AF37] pl-4 italic text-slate-700 my-6 bg-amber-50/50 py-2 rounded-r">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 my-4 text-slate-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 my-4 text-slate-700">{children}</ol>
    ),
  },
};