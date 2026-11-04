"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Cpu, BookOpen, FlaskConical, Users, Shield } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs & News", href: "/blogs", icon: BookOpen },
    { name: "Research Labs", href: "/research", icon: FlaskConical },
    { name: "Faculty & Staff", href: "/faculty", icon: Users },
    { name: "CMS Studio", href: "/studio", icon: Shield },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#00205B] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Department Branding */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="p-2 bg-[#D4AF37] text-[#00205B] rounded-lg">
              <Cpu className="h-7 w-7" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight block leading-tight">
                Intelligent Systems
              </span>
              <span className="text-xs text-[#D4AF37] font-medium tracking-wider uppercase block">
                Obafemi Awolowo University
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-1.5 text-sm font-medium hover:text-[#D4AF37] transition-colors py-2"
                >
                  {Icon && <Icon className="w-4 h-4 text-[#D4AF37]" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37] p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#00153D] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#00205B] hover:text-[#D4AF37]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}