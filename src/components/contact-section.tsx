import { Linkedin, Dribbble } from "lucide-react";

export function ContactSection() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        {/* Contact Message */}
        <div className="mb-8 md:mb-12">
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Let's connect, share stories, and collaborate to learn and grow
            together.
          </p>
        </div>

        {/* Email */}
        <div className="mb-8 md:mb-12">
          <a
            href="mailto:hunzalahshakeel1@gmail.com"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white hover:text-gray-300 transition-colors duration-300 break-all"
          >
            hunzalahshakeel1@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12 md:mb-16">
          <a
            href="https://www.linkedin.com/in/muhammadhunzalahshakeel"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://dribbble.com/hunzalah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="Dribbble Profile"
          >
            <Dribbble className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="space-y-2 text-gray-500 text-xs md:text-sm">
            <p>© 2025 Hunzalah. All rights reserved.</p>
            <p>Last updated on May 14, 2025.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
