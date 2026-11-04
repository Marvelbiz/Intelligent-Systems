import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { FlaskConical, ExternalLink, Tag } from "lucide-react";

// Cached helper function for Sanity data fetching
async function getProjects() {
  "use cache";
  return await client.fetch(PROJECTS_QUERY);
}

export default async function ResearchPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-extrabold text-[#00205B] flex items-center space-x-3">
          <FlaskConical className="w-8 h-8 text-[#D4AF37]" />
          <span>Departmental Research Projects</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Ongoing intelligent systems research, published papers, and open-source models produced at OAU.
        </p>
      </div>

      {/* Grid of Research Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj: any) => (
          <div
            key={proj._id}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-[#00205B]">{proj.title}</h2>
              {proj.lead && (
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Lead Investigator: <span className="text-slate-800">{proj.lead}</span>
                </p>
              )}
              <p className="text-sm text-slate-600 leading-relaxed">{proj.description}</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              {proj.tags && (
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="inline-flex items-center space-x-1 bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full font-medium"
                    >
                      <Tag className="w-3 h-3 text-[#D4AF37]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              )}

              {proj.paperUrl && (
                <a
                  href={proj.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#00205B] hover:text-[#D4AF37] transition"
                >
                  <span>Read Published Paper / Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}