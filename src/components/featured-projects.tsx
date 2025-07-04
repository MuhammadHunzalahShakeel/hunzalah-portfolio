import Image from "next/image";
import Link from "next/link";

export function FeaturedProjects() {
  return (
    <section className="px-0 py-12 md:px-12 lg:px-16 md:py-24" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] md:gap-[100px]">
          {/* SphereWMS Project - Left Aligned */}
          <Link href="/case-study/spherewms" className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl p-0 h-auto flex">
              <div className="relative h-full w-full">
                <Image
                  src="/spheremain.svg" // Correct image path for SphereWMS
                  alt="SphereWMS Project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 pt-2">
                SphereWMS
              </h3>
              <p className="text-teal-400 text-base md:text-lg">
                Web App, UI UX Design
              </p>
            </div>
          </Link>

          {/* Asaan Retail Project - Right Aligned and Occupying Full Space */}
          <Link href="/case-study/asaanretail" className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl p-0 h-auto flex">
              <div className="relative h-full w-full">
                <Image
                  src="/asaanmain.svg" // Correct image path for Asaan Retail
                  alt="Asaan Retail Project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 pt-2">
                Asaan Retail
              </h3>
              <p className="text-teal-400 text-base md:text-lg">
                Web App, UI UX Design
              </p>
            </div>
          </Link> 

          {/* Lawscript Project - Right Aligned and Occupying Full Space */}
          <Link href="/case-study/lawscript" className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl p-0 h-auto flex">
              <div className="relative h-full w-full">
                <Image
                  src="/lawmain.svg" // Correct image path for Lawscript
                  alt="LawScript Project"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 pt-2">
                LawScript
              </h3>
              <p className="text-teal-400 text-base md:text-lg">
                Web App, UI UX Design
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
