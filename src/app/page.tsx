import Link from "next/link";
import { ArrowRight, Brain, Bot, Eye, Database, Rocket, BookOpen, Users } from "lucide-react";

export default function HomePage() {
  const researchDomains = [
    {
      title: "Machine Learning & NLP",
      desc: "Developing intelligent algorithms and African language processing models.",
      icon: Brain,
    },
    {
      title: "Computer Vision",
      desc: "Deep learning models for medical imaging, agriculture, and satellite imagery.",
      icon: Eye,
    },
    {
      title: "Robotics & Automation",
      desc: "Autonomous navigation, embedded systems, and intelligent control.",
      icon: Bot,
    },
    {
      title: "Data & Knowledge Engineering",
      desc: "Large-scale data analytics, semantic web, and expert decision systems.",
      icon: Database,
    },
  ];

  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00153D] via-[#00205B] to-[#003380] text-white py-20 border-b-4 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-2/3 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/20 border border-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#D4AF37]">
              <span>Obafemi Awolowo University, Ile-Ife</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Shaping the Future of <span className="text-[#D4AF37]">Artificial Intelligence</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
              Welcome to the Department of Intelligent Systems at OAU. We educate next-generation AI leaders and conduct cutting-edge research in Machine Learning, Computer Vision, and Autonomous Systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <Link
                href="/blogs"
                className="bg-[#D4AF37] hover:bg-[#c3a02f] text-[#00205B] font-bold px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition"
              >
                <span>Read Dept Blogs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/research"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition"
              >
                Explore Research Labs
              </Link>
            </div>
          </div>
          
          {/* Hero Visual Card */}
          <div className="md:w-1/3 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center space-y-4">
            <Rocket className="w-16 h-16 text-[#D4AF37] mx-auto animate-pulse" />
            <h2 className="text-xl font-bold">Innovation Hub</h2>
            <p className="text-sm text-gray-300">
              Discover our latest published research, student projects, and upcoming academic seminars.
            </p>
          </div>
        </div>
      </section>

      {/* Research Domain Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#00205B]">Core Research Areas</h2>
          <p className="text-gray-600 mt-2">
            Pioneering research divisions solving real-world challenges with intelligent computation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchDomains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#00205B]/10 rounded-lg flex items-center justify-center text-[#00205B] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{domain.title}</h3>
                <p className="text-sm text-slate-600">{domain.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Action Banner */}
      <section className="bg-[#00205B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">Are you a Lecturer or Researcher in the Department?</h3>
            <p className="text-gray-300 text-sm">Access the embedded Sanity Studio to publish blog posts, lab updates, or research papers.</p>
          </div>
          <Link
            href="/studio"
            className="bg-[#D4AF37] hover:bg-[#b8972e] text-[#00205B] font-bold px-6 py-3 rounded-lg shadow transition whitespace-nowrap"
          >
            Access CMS Studio
          </Link>
        </div>
      </section>

    </div>
  );
}