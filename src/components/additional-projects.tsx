import Image from "next/image";

export function AdditionalProjects() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Climate Project */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-400 to-green-600 p-8 md:p-12 h-96 flex items-center justify-center">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                {/* Mobile Phone */}
                {/* <div className="relative">
                  <div className="w-40 h-80 bg-black rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-black rounded-2xl overflow-hidden flex items-center justify-center">
                      <div className="text-white text-2xl font-light">
                        Climate
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="relative bg-white rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300 h-full">
                  <Image
                    src="/Hero1.png"
                    alt="Analytics Dashboard Project"
                    width={600}
                    height={400}
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                Climate
              </h3>
              <p className="text-green-400 text-lg mb-4">
                Mobile, UX/UI Design
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                A social network aimed at reducing carbon footprint
              </p>
            </div>
          </div>

          {/* Acet Project */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 md:p-12 h-96 flex items-center justify-center">
              <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                {/* Laptop and Mobile Combo */}
                {/* <div className="relative"> */}
                {/* Laptop Mockup */}
                {/* <div className="w-72 h-44 bg-gray-800 rounded-lg p-2 shadow-2xl">
                    <div className="w-full h-full bg-black rounded-md overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full relative">
                        <Image
                          src="/placeholder.svg?height=160&width=260"
                          alt="Acet Reusable Packaging Platform"
                          width={260}
                          height={160}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    </div>
                  </div> */}

                {/* Mobile Overlay */}
                {/* <div className="absolute -bottom-6 -right-6 w-24 h-40 bg-black rounded-2xl p-1 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=150&width=90"
                        alt="Acet Mobile Interface"
                        width={90}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div> */}
                {/* </div> */}
                <div className="relative bg-white rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300 h-full">
                  <Image
                    src="/Hero1.png"
                    alt="Analytics Dashboard Project"
                    width={600}
                    height={400}
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                Acet
              </h3>
              <p className="text-blue-400 text-lg mb-4">
                Responsive Web, UX/UI Design
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                A return platform for a reusable packaging startup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
