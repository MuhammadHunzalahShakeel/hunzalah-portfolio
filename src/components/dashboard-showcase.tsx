import Image from "next/image"

export function DashboardShowcase() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Image */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 p-6 md:p-12">
          <div className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="SphereWMS Dashboard Interface"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
