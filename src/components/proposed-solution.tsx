export function ProposedSolution() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Solution Section */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Possible Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              To address the existing issues, we proposed restructuring the dashboard into four dedicated sections:
              Inventory Management, Order Processing, Shipment Tracking, and Warehouse Analytics. This modular approach
              would help reduce clutter and allow warehouse operators to focus on specific data relevant to their tasks.
              Each widget would be designed to offer meaningful insights, making it easier for users to monitor
              warehouse performance and make informed operational decisions. The goal was to create a cleaner, more
              intuitive interface that aligns with warehouse management workflows and improves overall usability for
              logistics teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
