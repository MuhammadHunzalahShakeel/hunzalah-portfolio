import Image from "next/image"

export function UsabilityTesting() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Usability Testing Section */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6 md:mb-8">Usability testing</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            To evaluate the effectiveness of the current dashboard design, we conducted usability testing with existing
            warehouse operators. The results revealed several key issues: users struggled to filter and access relevant
            data, lacked clear visibility into their inventory status, and were often confused about how to navigate to
            detailed views—frequently clicking on dashboard cards expecting them to be interactive.
          </p>
        </div>

        {/* Dashboard Testing Visual */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Total Inventory Section */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base md:text-lg font-medium text-black">Total Inventory</h4>
                <div className="text-xs text-gray-500">Last 30 Days</div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-4">2,847 Items</div>
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Inventory Chart"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-sm text-gray-600">
                <div>*In Stock: 2,456</div>
                <div>*Low Stock: 234</div>
                <div>*Out of Stock: 157</div>
              </div>
            </div>

            {/* Warehouse Locations */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base md:text-lg font-medium text-black">Warehouse Locations</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Karachi Main</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold">PKR 2,450,890.75</div>
                    <div className="text-xs text-gray-500">1,234 Items</div>
                    <button className="text-xs text-teal-600 hover:underline">View</button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Lahore Hub</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold">PKR 1,876,432.50</div>
                    <div className="text-xs text-gray-500">987 Items</div>
                    <button className="text-xs text-teal-600 hover:underline">View</button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Islamabad Center</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold">PKR 1,234,567.89</div>
                    <div className="text-xs text-gray-500">626 Items</div>
                    <button className="text-xs text-teal-600 hover:underline">View</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Operations Summary */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base md:text-lg font-medium text-black">Operations</h4>
                <div className="text-xs text-gray-500">Last 30 Days</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Orders Processed</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold">PKR 3,892,456.78</div>
                    <button className="text-xs text-teal-600 hover:underline">View</button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Shipments Out</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold">PKR 2,567,890.12</div>
                    <button className="text-xs text-teal-600 hover:underline">View</button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Returns</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold">PKR 234,567.89</div>
                    <button className="text-xs text-teal-600 hover:underline">View</button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Warehouse Costs</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold">PKR 456,789.01</div>
                    <button className="text-xs text-teal-600 hover:underline">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
