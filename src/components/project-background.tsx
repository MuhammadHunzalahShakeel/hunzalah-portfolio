export function ProjectBackground() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        {/* Background Section */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Background</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              SphereWMS is an innovative warehouse management system revolutionizing logistics operations across
              Southeast Asia. The platform offers a comprehensive solution, meticulously designed to manage inventory
              tracking, order fulfillment, warehouse operations, and shipment coordination, thereby simplifying the
              complexities of modern supply chain management. With an impressive roster of over 150+ logistics clients,
              our services extend across a diverse range of industries, including e-commerce fulfillment, retail
              distribution, third-party logistics (3PL), and manufacturing warehouses, testament to its versatility and
              wide-reaching impact in the logistics sector.
            </p>
          </div>
        </div>

        {/* Problem Statement Section */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Problem Statement</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              When I joined the SphereWMS team, the existing warehouse management dashboard presented significant
              usability challenges. The interface was cluttered, visually unstructured, and lacked a clear information
              hierarchy, making it difficult for warehouse operators to navigate efficiently. Essential data—such as
              inventory levels, order processing metrics, and shipment tracking information—were either missing or
              poorly organized, often scattered across multiple views. This not only overwhelmed users but also hindered
              their ability to access relevant insights and track operational performance effectively. The absence of a
              user-centric design and contextual data organization led to confusion, reduced productivity, and a
              frustrating user experience for warehouse managers and staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
