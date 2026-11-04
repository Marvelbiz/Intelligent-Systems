import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { FACULTY_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Users, Mail, GraduationCap } from "lucide-react";

// Cached helper function for Sanity data fetching
async function getFaculty() {
  "use cache";
  return await client.fetch(FACULTY_QUERY);
}

export default async function FacultyPage() {
  const faculty = await getFaculty();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-extrabold text-[#00205B] flex items-center space-x-3">
          <Users className="w-8 h-8 text-[#D4AF37]" />
          <span>Faculty & Research Staff</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Meet the academic scholars, professors, and lab directors leading research in Intelligent Systems at OAU.
        </p>
      </div>

      {/* Grid of Faculty Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculty.map((member: any) => (
          <div
            key={member._id}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col items-center text-center space-y-4"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#00205B]">
              {member.image ? (
                <Image
                  src={urlFor(member.image).url()}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500">
                  <GraduationCap className="w-12 h-12" />
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">{member.name}</h2>
              <p className="text-sm font-medium text-[#D4AF37]">{member.role}</p>
            </div>

            {member.bio && (
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                {member.bio}
              </p>
            )}

            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#00205B] bg-slate-100 px-3 py-1.5 rounded-full hover:bg-[#00205B] hover:text-white transition"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{member.email}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}