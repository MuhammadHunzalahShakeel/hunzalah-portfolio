import Image from "next/image"

export function CaseStudyHero() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Company Logo */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder */}
            <div className="w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="SphereWMS Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-teal-500 font-bold text-2xl md:text-3xl">Asaan</div>
              <div className="text-gray-700 font-medium text-sm md:text-base tracking-wider">Retail</div>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight text-black">
            A warehouse management system for <span className="text-teal-500">better logistics</span> and{" "}
            <span className="text-teal-500">operational efficiency</span>
          </h1>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">Year</h3>
            <p className="text-black font-semibold text-base md:text-lg">2024</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">Platform</h3>
            <p className="text-black font-semibold text-base md:text-lg">Web App</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">My Role</h3>
            <p className="text-black font-semibold text-base md:text-lg">UX Research, UX Design, UI Design</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">Company</h3>
            <p className="text-black font-semibold text-base md:text-lg">SphereWMS</p>
          </div>
        </div>
      </div>
    </section>
  )
}
