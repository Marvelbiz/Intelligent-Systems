import { cacheLife } from "next/cache";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FlaskConical, ArrowRight } from "lucide-react";

async function getProjects() {
  "use cache";
  cacheLife("seconds");
  return await client.fetch(PROJECTS_QUERY);
}

export default async function ResearchPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-4">
        <span className="inline-block bg-[#00205B] text-[#D4AF37] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
          Research Labs & Projects
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#00205B]">
          Pioneering AI & Intelligent Systems
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Explore our active research groups, lab initiatives, and cutting-edge publications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects?.map((project: any) => (
          <div
            key={project._id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div className="space-y-6 p-6">
              {project.image && (
                <div className="relative h-60 w-full rounded-xl overflow-hidden">
                  <Image
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#00205B]">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2">
              <span className="inline-flex items-center space-x-2 text-sm font-bold text-[#00205B]">
                <FlaskConical className="w-4 h-4 text-[#D4AF37]" />
                <span>Active Research Initiative</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}