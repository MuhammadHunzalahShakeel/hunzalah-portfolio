import Image from "next/image"

export function DefinePhase() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Define Phase Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-500 mb-8">Define Phase</h2>
        </div>

        {/* Persona Section */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6 md:mb-8">Persona</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
            To complete the project, we conducted surveys to gain deeper insights into the needs and behaviors of
            warehouse operators and logistics managers across different facility types. This targeted approach ensures
            that the system is designed with specific users in mind, resulting in a more effective and user-friendly
            experience tailored to warehouse management workflows and operational requirements.
          </p>

          {/* Persona Card */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Photo and Basic Info */}
              <div className="lg:col-span-1">
                <div className="text-center mb-6">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt="Ian McIvor - Implementation Manager"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold text-black">Ian McIvor</h4>
                </div>

                {/* Basic Info */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <div className="space-y-2 text-sm md:text-base">
                    <div>
                      <span className="font-medium">Age:</span> 60
                    </div>
                    <div>
                      <span className="font-medium">Status:</span> Married
                    </div>
                    <div>
                      <span className="font-medium">Location:</span> Kissimmee, Florida, US
                    </div>
                    <div>
                      <span className="font-medium">Occupation:</span> Implementation Manager
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Ian is a seasoned professional with an extensive background in Warehouse Management Systems. Over his
                  35-year career, he has gained deep insights into the complexities and challenges of managing warehouse
                  operations. Since joining SphereWMS in January 2022, Ian has been responsible for overseeing the
                  implementation of new systems and processes to enhance operational efficiency and productivity.
                </div>
              </div>

              {/* Middle Column - Frustrations and Goals */}
              <div className="lg:col-span-1 space-y-8">
                {/* Frustrations */}
                <div>
                  <h5 className="text-lg md:text-xl font-semibold text-black mb-4">Frustration</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700">
                        Productivity losses and increased errors due to the disorganized layout and confusing
                        navigation.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700">
                        Navigating the system is difficult with unorganized menus and flow.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700">
                        Poor user interface fails to impress customers.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700">
                        Resistance to using the system because it complicates operations.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700">
                        To minimize operational disruptions during system transitions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <h5 className="text-lg md:text-xl font-semibold text-black mb-4">Goal</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700">
                        To ensure smooth implementation of WMS solutions.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700">
                        To optimize warehouse operations and improve efficiency.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700">
                        To provide effective training and support for staff using the new system.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700">
                        To minimize operational disruptions during system transitions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Personality and Skills */}
              <div className="lg:col-span-1 space-y-8">
                {/* Personality */}
                <div>
                  <h5 className="text-lg md:text-xl font-semibold text-black mb-4">Personality</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-sm md:text-base text-gray-700">Calm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-sm md:text-base text-gray-700">Funny</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-sm md:text-base text-gray-700">Creative</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-sm md:text-base text-gray-700">Friendly</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h5 className="text-lg md:text-xl font-semibold text-black mb-4">Skills</h5>
                  <div className="space-y-2">
                    {[
                      "Project Management",
                      "3PL",
                      "Transportation",
                      "Supply Chain",
                      "Distribution Logistics",
                      "Operational Enhancements",
                      "Turn Around Management",
                      "Fulfillment Management",
                      "Procurement",
                      "Logistics",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-sm md:text-base text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empathy Map Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-6 md:mb-8">Empathy Map</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
            The empathy map is like a teamwork tool that helps teams understand their customers better. It&apos;s like a
            picture of a group of users, such as a specific customer type. Using the empathy map, teams can learn about
            what their customers need, how they feel, and what they do. This helps teams make their products or services
            better suited to their customers.
          </p>

          {/* Empathy Map Grid */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Says Quadrant */}
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg md:text-xl font-semibold text-black mb-4">Says</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      I am unable to navigate efficiently in front of customers due to the poor navigation structure of
                      the system.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      Due to the outdated design and lack of a wow factor, I&apos;m encountering difficulties in marketing
                      and client demos.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      It&apos;s challenging to train pickers, packers, & shippers to use App.
                    </p>
                  </div>
                </div>
              </div>

              {/* Thinks Quadrant */}
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg md:text-xl font-semibold text-black mb-4">Thinks</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      The menu structure and flow need improvement to clearly convey our app&apos;s problem-solving
                      capabilities to customers.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      The new UI design will modernize the app as well as effectively address customer business
                      problems.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      In Outbound, turnover is high. Better user experience means easier training for new workers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Does Quadrant */}
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg md:text-xl font-semibold text-black mb-4">Does</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      Integrating our system involves understanding the client&apos;s use case and modifying it accordingly.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      Manages training for staff with diverse technical proficiency levels.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      Collaborates with the marketing team and conducts system demos for them.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feels Quadrant */}
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg md:text-xl font-semibold text-black mb-4">Feels</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      Overwhelmed as he has no alternative but to use the app.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      Irritated by wasting too much efforts in a simple process.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-gray-700">
                      Exited to anticipate the resolved system with innovative UI/UX solutions, he eagerly looks forward
                      to enhanced functionality and user experience.
                    </p>
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
