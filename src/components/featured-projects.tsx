import Image from "next/image";
import Link from "next/link";

export function FeaturedProjects() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* SphereWMS Project - Now clickable */}
          <Link href="/case-study/spherewms" className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-teal-400 to-teal-600 p-6 md:p-12 h-80 md:h-96 flex items-center justify-center">
              <div className="flex gap-2 md:gap-4 transform group-hover:scale-105 transition-transform duration-300">
                {/* Mobile Phone 1 */}
                {/* <div className="relative">
                  <div className="w-24 h-48 md:w-32 md:h-64 bg-black rounded-xl md:rounded-2xl p-1 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-lg md:rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=250&width=120"
                        alt="SphereWMS Mobile App Screen 1"
                        width={120}
                        height={250}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="relative bg-white rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300 h-full">
                  <Image
                    src="/hero1.png?height=400&width=600"
                    alt="Analytics Dashboard Project"
                    width={600}
                    height={400}
                    className="w-full h-full rounded-lg"
                  />
                </div>

                {/* Mobile Phone 2 */}
                {/* <div className="relative">
                  <div className="w-24 h-48 md:w-32 md:h-64 bg-black rounded-xl md:rounded-2xl p-1 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-lg md:rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=250&width=120"
                        alt="SphereWMS Mobile App Screen 2"
                        width={120}
                        height={250}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="mt-4 md:mt-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2">
                SphereWMS
              </h3>
              <p className="text-teal-400 text-base md:text-lg">
                Web App, UI UX Design
              </p>
            </div>
          </Link>

          {/* Asaan Retail Project */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-600 to-purple-800 p-6 md:p-12 h-80 md:h-96 flex items-center justify-center">
              <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                {/* Laptop Mockup */}
                {/* <div className="relative">
                  <div className="w-48 h-32 md:w-64 md:h-40 bg-gray-800 rounded-md md:rounded-lg p-1 md:p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-sm md:rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=150&width=240"
                        alt="Asaan Retail Dashboard"
                        width={240}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div> */}

                {/* Mobile/Card Overlay */}
                {/* <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-16 h-24 md:w-24 md:h-32 bg-white rounded-lg md:rounded-xl shadow-2xl p-1 md:p-2">
                    <Image
                      src="/placeholder.svg?height=110&width=80"
                      alt="Asaan Retail Mobile Interface"
                      width={80}
                      height={110}
                      className="w-full h-full object-cover rounded-md md:rounded-lg"
                    />
                  </div>
                </div> */}
                <div className="relative bg-white rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300 h-full">
                  <Image
                    src="/hero1.png?height=400&width=600"
                    alt="Analytics Dashboard Project"
                    width={600}
                    height={400}
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2">
                Asaan Retail
              </h3>
              <p className="text-purple-400 text-base md:text-lg">
                Web App, UI UX Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
