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
                Improve the legacy warehouse management system
              </h3>
              <p className="text-[#28AFE7] text-base md:text-lg">
                SphereWMS
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
                A dashboard redesign for better performance and user experience
              </h3>
              <p className="text-[#009241] text-base md:text-lg">
                Asaan Retail
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
                Designing an AI-Driven saas solution for law firms
              </h3>
              <p className="text-[#DAC397] text-base md:text-lg">
                LawScript
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
