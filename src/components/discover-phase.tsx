export function DiscoverPhase() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Discover Phase Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-teal-500 mb-8">Discover Phase</h2>
        </div>

        {/* Research Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6 md:mb-8">Research</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
            Before exploring potential solutions, it was essential to develop a deep understanding of our users and the
            challenges they faced. To achieve this, we conducted user interviews with both active warehouse operators
            and those who had recently stopped using the platform.
          </p>

          {/* User Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                &quot;The current dashboard feels overwhelming. Everything is crammed into one screen, and I often have to
                scroll or guess where to find the numbers I need. I mostly care about daily inventory levels and
                shipment updates, but I have to dig through unrelated data to get that.&quot;
              </p>
              <p className="text-gray-500 text-sm md:text-base font-medium">
                ~ Ahmed Hassan - Warehouse Manager at LogiFlow Solutions
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                &quot;I find it really hard to track warehouse performance on the dashboard. There&apos;s no clear summary of
                what&apos;s been processed versus what&apos;s pending or delayed. I usually have to export reports or contact
                support for clarification. A separate analytics section with just the key figures would save me so much
                time.&quot;
              </p>
              <p className="text-gray-500 text-sm md:text-base font-medium">
                ~ Sarah Khan - Operations Director at Swift Logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
