import { Linkedin, Dribbble } from "lucide-react"

export function CaseStudyFooter() {
  return (
    <section className="px-4 py-16 md:px-12 lg:px-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Contact Message */}
        <div className="mb-8 md:mb-12">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Let&apos;s connect, share stories, and collaborate to learn and grow together.
          </p>
        </div>

        {/* Email */}
        <div className="mb-8 md:mb-12">
          <a
            href="mailto:hunzalahshakeel1@gmail.com"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black hover:text-gray-600 transition-colors duration-300 break-all"
          >
            hunzalahshakeel1@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12 md:mb-16">
          <a
            href="https://linkedin.com/in/hunzalah"
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
          {/* WhatsApp */}
        <a
          href="https://wa.me/923130212829"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
          aria-label="WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-white"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.43 0 .05 5.38.05 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62a11.94 11.94 0 0 0 5.85 1.53h.01c6.61 0 11.99-5.38 11.99-11.99 0-3.2-1.25-6.21-3.51-8.44ZM12.04 21.91h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.67.96.98-3.58-.23-.37a9.88 9.88 0 0 1-1.52-5.28C2.18 6.55 6.6 2.13 12.04 2.13c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 7c0 5.44-4.43 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.07 2.91 1.22 3.11c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 md:pt-8">
          <div className="space-y-2 text-gray-500 text-xs md:text-sm">
            <p>© 2026 Hunzalah. All rights reserved.</p>
            <p>Last updated on July 07, 2026.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
