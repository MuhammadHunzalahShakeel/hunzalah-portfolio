import Image from "next/image";
import Link from "next/link";

export function FeaturedProjects() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] md:gap-[100px]">

          {/* Veyra Project */}
          <Link href="/case-study/veyra" className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden">
              <div className="relative h-auto w-full">
                <Image
                  src="/Veyramain.svg"
                  alt="Veyra Project"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-6 px-2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 pt-2">
                A Smarter Way to Manage, Move, and Understand Your Money
              </h3>
              <p className="text-[#007AFF] text-base md:text-lg">Veyra</p>
            </div>
          </Link>

          {/* SkillRadar Project */}
          <Link href="/case-study/skillradar" className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden">
              <div className="relative h-auto w-full">
                <Image
                  src="/skillradarmain.svg"
                  alt="SkillRadar Project"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-6 px-2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 pt-2">
                Helping Employers Discover 1B+ Professionals Faster
              </h3>
              <p className="text-[#007AFF] text-base md:text-lg">SkillRadar</p>
            </div>
          </Link>

          {/* SkillGigs App Project */}
          <Link href="/case-study/skillgigs" className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden">
              <div className="relative h-auto w-full">
                <Image
                  src="/skillgigsmain.svg"
                  alt="SkillGigs Project"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-6 px-2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 pt-2">
                Helping Professionals Find Better Opportunities Faster
              </h3>
              <p className="text-[#007AFF] text-base md:text-lg">SkillGigs</p>
            </div>
          </Link>

          {/* SphereWMS Project */}
          <Link href="/case-study/spherewms" className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden">
              <div className="relative h-auto w-full">
                <Image
                  src="/spheremain.svg"
                  alt="SphereWMS Project"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-6 px-2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 pt-2">
                Improve the legacy warehouse management system
              </h3>
              <p className="text-[#28AFE7] text-base md:text-lg">SphereWMS</p>
            </div>
          </Link>
          

          {/* Asaan Retail Project */}
          <Link href="/case-study/asaanretail" className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden">
              <div className="relative h-auto w-full">
                <Image
                  src="/asaanmain.svg"
                  alt="Asaan Retail Project"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-6 px-2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 pt-2">
                A dashboard redesign for better performance and user experience
              </h3>
              <p className="text-[#009241] text-base md:text-lg">Asaan Retail</p>
            </div>
          </Link>

          {/* LawScript Project */}
          <Link href="/case-study/lawscript" className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden">
              <div className="relative h-auto w-full">
                <Image
                  src="/lawmain.svg"
                  alt="LawScript Project"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-6 px-2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 pt-2">
                Designing an AI-Driven SaaS solution for law firms
              </h3>
              <p className="text-[#DAC397] text-base md:text-lg">LawScript</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
