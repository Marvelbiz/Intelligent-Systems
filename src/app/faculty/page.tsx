import { cacheLife } from "next/cache";
import { client } from "@/sanity/lib/client";
import { FACULTY_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Mail, BookOpen, Award } from "lucide-react";

async function getFaculty() {
  "use cache";
  cacheLife("seconds");
  return await client.fetch(FACULTY_QUERY);
}

export default async function FacultyPage() {
  const facultyList = await getFaculty();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-4">
        <span className="inline-block bg-[#00205B] text-[#D4AF37] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
          Faculty Directory
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#00205B]">
          Meet Our Academic Staff
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Dedicated researchers, educators, and innovators driving artificial intelligence and intelligent systems at OAU.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyList?.map((member: any) => (
          <div
            key={member._id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
          >
            {member.image ? (
              <div className="relative h-72 w-full bg-slate-100">
                <Image
                  src={urlFor(member.image).url()}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-72 w-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xl">
                {member.name}
              </div>
            )}

            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <span className="inline-block bg-[#D4AF37]/20 text-[#00205B] text-xs font-bold px-2.5 py-1 rounded">
                  {member.role || "Faculty Member"}
                </span>
                <h3 className="text-xl font-bold text-[#00205B]">{member.name}</h3>
                <p className="text-sm text-slate-600 line-clamp-3">{member.bio}</p>
              </div>

              {member.email && (
                <div className="pt-4 border-t border-slate-100 flex items-center space-x-2 text-sm text-slate-600">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <a href={`mailto:${member.email}`} className="hover:text-[#00205B] truncate">
                    {member.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}