import Image from "next/image";

export function PortfolioShowcase() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Large Featured Project */}
          <div className="row-span-2 relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600 p-8 h-full">
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

          {/* Grid of Smaller Projects */}
          <div className="grid grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 p-4 h-full">
                <Image
                  src="/hero2.png?height=200&width=300"
                  alt="Web Experience Project"
                  width={300}
                  height={200}
                  className="w-full h-full rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-500 to-green-600 p-4 h-full">
                <Image
                  src="/hero3.png?height=200&width=300"
                  alt="Dashboard Interface"
                  width={300}
                  height={200}
                  className="w-full h-full rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-500 to-pink-600 p-4 h-full">
                <Image
                  src="/hero4.png?height=200&width=300"
                  alt="Mobile Analytics App"
                  width={300}
                  height={200}
                  className="w-full rounded-lg transform group-hover:scale-105 transition-transform duration-300 h-full"
                />
              </div>
            </div>

            {/* Project 4 */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 p-4 h-full">
                <Image
                  src="/hero5.png?height=200&width=300"
                  alt="Data Visualization"
                  width={300}
                  height={200}
                  className="w-full h-full rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Design Quote */}
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white">
            <span className="text-gray-400">"</span>
            Design is not just what it looks like and feels like.
            <br />
            Design is how it works
            <span className="text-gray-400">"</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
