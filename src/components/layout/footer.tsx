import Link from "next/link";
import { Cpu, MapPin, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#00153D] text-white border-t-4 border-[#D4AF37] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cpu className="h-6 w-6 text-[#D4AF37]" />
              <span className="font-bold text-lg">Dept. of Intelligent Systems</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pioneering research, artificial intelligence engineering, and intelligent robotics at Obafemi Awolowo University, Ile-Ife.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/blogs" className="hover:text-white transition">Departmental Blog</Link></li>
              <li><Link href="/research" className="hover:text-white transition">Research & Publications</Link></li>
              <li><Link href="/faculty" className="hover:text-white transition">Faculty Directory</Link></li>
              <li><Link href="/studio" className="hover:text-white transition">Staff CMS Login</Link></li>
            </ul>
          </div>

          {/* Column 3: Academic Focus */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] tracking-wider uppercase mb-4">Focus Areas</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Computer Vision & Medical AI</li>
              <li>Natural Language Processing (African Languages)</li>
              <li>Autonomous Systems & Robotics</li>
              <li>Data Science & Knowledge Engineering</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#D4AF37] tracking-wider uppercase mb-4">Location & Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Department of Intelligent Systems, OAU, Ile-Ife, Osun State, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>intelligentsystems@oauife.edu.ng</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>oauife.edu.ng</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-400">
          <p>© 2026 Department of Intelligent Systems, Obafemi Awolowo University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}