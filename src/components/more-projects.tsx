import Image from "next/image"

export function MoreProjects() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hopin Project */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 p-8 md:p-12 h-96 flex items-center justify-center">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                {/* Laptop Mockup */}
                <div className="relative">
                  <div className="w-80 h-48 bg-gray-200 rounded-lg p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg"
                        alt="Hopin Virtual Conference Platform"
                        width={300}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">Hopin</h3>
              <p className="text-cyan-400 text-lg mb-4">Web, UX/UI Design</p>
              <p className="text-gray-400 text-base leading-relaxed">
                Helping virtual conference goers feel more connected
              </p>
            </div>
          </div>

          {/* Archivd Project */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-teal-500 p-8 md:p-12 h-96 flex items-center justify-center">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                {/* Laptop Mockup */}
                <div className="relative">
                  <div className="w-80 h-48 bg-gray-200 rounded-lg p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg"
                        alt="Archivd Blockchain Copyright Platform"
                        width={300}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">Archivd</h3>
              <p className="text-purple-400 text-lg mb-4">Web, UX/UI Design</p>
              <p className="text-gray-400 text-base leading-relaxed">
                Protecting work under copyright, using blockchain
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
