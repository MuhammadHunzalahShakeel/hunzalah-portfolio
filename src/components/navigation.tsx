"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isOnCaseStudy = pathname?.includes("/case-study/");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Dynamic styling based on page
  const navTextColor = isOnCaseStudy ? "text-black" : "text-white";
  const navBgColor = isOnCaseStudy ? "bg-white" : "bg-transparent";
  const mobileMenuBg = isOnCaseStudy
    ? "bg-white bg-opacity-95"
    : "bg-black bg-opacity-95";

  return (
    <>
      <nav
        className={`px-6 py-6 md:px-12 lg:px-16 relative z-50 ${navBgColor}`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-xl font-medium">
            <Link
              href="/"
              className={`${navTextColor} hover:opacity-80 transition-opacity`}
            >
              Hunzalah
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#work"
              className={`${navTextColor} hover:opacity-80 transition-opacity`}
            >
              Work
            </Link>
            <Link
              href="https://drive.google.com/file/d/1CAe5gB_TNtFGFEgV8W7dPb9H9vkCNL-u/view?usp=sharing"
              className={`${navTextColor} hover:opacity-80 transition-opacity`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>

            <Link
              href="/#about"
              className={`${navTextColor} hover:opacity-80 transition-opacity`}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className={`${navTextColor} hover:opacity-80 transition-opacity`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${navTextColor} z-50 relative`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>  
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`fixed inset-0 ${mobileMenuBg} z-40 md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/#work"
              className={`${navTextColor} text-2xl hover:opacity-80 transition-opacity`}
              onClick={toggleMenu}
            >
              Work
            </Link>
            <Link
              href="/#resume"
              className={`${navTextColor} text-2xl hover:opacity-80 transition-opacity`}
              onClick={toggleMenu}
            >
              Resume
            </Link>
            <Link
              href="/#about"
              className={`${navTextColor} text-2xl hover:opacity-80 transition-opacity`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className={`${navTextColor} text-2xl hover:opacity-80 transition-opacity`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
