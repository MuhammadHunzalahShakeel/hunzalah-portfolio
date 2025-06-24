export function UserJourneyMap() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* User Journey Map Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">User Journey Map</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Outlining the step-by-step experience of a user interacting with our product or service, it highlights key
            touchpoints, emotions, and pain points throughout the user&apos;s journey.
          </p>
        </div>

        {/* Journey Map Visualization */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          {/* Journey Stages */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {/* Stage 1: System Login */}
            <div className="bg-white rounded-xl p-4 md:p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-black">System Login</h4>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Actions</h5>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• Enters credentials</li>
                    <li>• Navigates to dashboard</li>
                    <li>• Reviews daily overview</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Pain Points</h5>
                  <ul className="text-xs md:text-sm text-red-600 space-y-1">
                    <li>• Cluttered interface</li>
                    <li>• Information overload</li>
                    <li>• Poor visual hierarchy</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Emotions</h5>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-xs">😟</span>
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">Overwhelmed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2: Inventory Check */}
            <div className="bg-white rounded-xl p-4 md:p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-black">Inventory Check</h4>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Actions</h5>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• Searches for items</li>
                    <li>• Checks stock levels</li>
                    <li>• Reviews locations</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Pain Points</h5>
                  <ul className="text-xs md:text-sm text-red-600 space-y-1">
                    <li>• Hard to find data</li>
                    <li>• Multiple clicks needed</li>
                    <li>• Unclear navigation</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Emotions</h5>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-500 text-xs">😤</span>
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">Frustrated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3: Order Processing */}
            <div className="bg-white rounded-xl p-4 md:p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-black">Order Processing</h4>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Actions</h5>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• Reviews pending orders</li>
                    <li>• Assigns tasks to staff</li>
                    <li>• Monitors progress</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Pain Points</h5>
                  <ul className="text-xs md:text-sm text-red-600 space-y-1">
                    <li>• No clear priorities</li>
                    <li>• Status unclear</li>
                    <li>• Manual tracking</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Emotions</h5>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-xs">😰</span>
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">Stressed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 4: Staff Training */}
            <div className="bg-white rounded-xl p-4 md:p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-black">Staff Training</h4>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Actions</h5>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• Explains system features</li>
                    <li>• Demonstrates workflows</li>
                    <li>• Answers questions</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Pain Points</h5>
                  <ul className="text-xs md:text-sm text-red-600 space-y-1">
                    <li>• Complex interface</li>
                    <li>• High learning curve</li>
                    <li>• Frequent errors</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Emotions</h5>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-xs">😫</span>
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">Exhausted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 5: Client Demos */}
            <div className="bg-white rounded-xl p-4 md:p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-semibold">5</span>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-black">Client Demos</h4>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Actions</h5>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• Presents system features</li>
                    <li>• Shows capabilities</li>
                    <li>• Handles objections</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Pain Points</h5>
                  <ul className="text-xs md:text-sm text-red-600 space-y-1">
                    <li>• Outdated appearance</li>
                    <li>• Poor first impression</li>
                    <li>• Navigation issues</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium text-gray-600 mb-2">Emotions</h5>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-xs">😳</span>
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">Embarrassed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Flow Line */}
          <div className="hidden md:block relative mt-8">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 to-red-200"></div>
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="w-4 h-4 bg-blue-500 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Overall Journey Insights */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-xl p-4 md:p-6">
              <h4 className="text-lg font-semibold text-red-700 mb-3">Key Pain Points</h4>
              <ul className="text-sm text-red-600 space-y-2">
                <li>• Overwhelming and cluttered interface</li>
                <li>• Poor information architecture</li>
                <li>• Inefficient navigation patterns</li>
                <li>• High training complexity</li>
                <li>• Unprofessional appearance</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-xl p-4 md:p-6">
              <h4 className="text-lg font-semibold text-orange-700 mb-3">Emotional Journey</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📉</span>
                  <span className="text-sm text-orange-600">Declining satisfaction throughout journey</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">😟</span>
                  <span className="text-sm text-orange-600">Negative emotions dominate experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm text-orange-600">High stress at critical touchpoints</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h4 className="text-lg font-semibold text-blue-700 mb-3">Opportunities</h4>
              <ul className="text-sm text-blue-600 space-y-2">
                <li>• Simplify dashboard layout</li>
                <li>• Improve information hierarchy</li>
                <li>• Streamline navigation flow</li>
                <li>• Reduce training complexity</li>
                <li>• Modernize visual design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
