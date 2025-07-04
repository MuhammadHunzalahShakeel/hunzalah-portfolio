import { Navigation } from "@/components/navigation";
import { CaseStudyHero } from "@/components/case-study-hero";
import { DashboardShowcase } from "@/components/dashboard-showcase";
import { ProjectBackground } from "@/components/project-background";
import { ExistingDashboard } from "@/components/existing-dashboard";
import { ProposedSolution } from "@/components/proposed-solution";
import { DiscoverPhase } from "@/components/discover-phase";
import { UsabilityTesting } from "@/components/usability-testing";
import { DefinePhase } from "@/components/define-phase";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { UserJourneyMap } from "@/components/user-journey-map";
import { CaseStudyFooter } from "@/components/case-study-footer";
import Image from "next/image";

export default function SphereWMSCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="bg-white">
        <Navigation />
      </div>

      {/* Company Logo Section */}
      <section className="px-4 py-12 md:px-12 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="">
                <Image
                  src="/spherelogo.png"
                  alt="Company Logo"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-black">
              Improve the <span className="text-[#28AFE7]">legacy warehouse management system</span>
            </h1>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            <div>
              <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">Year</h3>
              <p className="text-black font-semibold text-base md:text-lg">2023-2024</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">Platform</h3>
              <p className="text-black font-semibold text-base md:text-lg">Web App</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">My Role</h3>
              <p className="text-black font-semibold text-base md:text-lg">UX Research, UX Design, UI Design</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">Client of</h3>
              <p className="text-black font-semibold text-base md:text-lg">Shispare</p>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <img
            src="/sphere1.png"
            alt="Dashboard redesign"
            className="w-[1200px] h-[700px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Background Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Background</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The SphereWMS is a comprehensive warehouse management system (WMS) utilized by large warehouses to efficiently track inventory, manage storage, and fulfill customer orders. The application seamlessly integrates with multiple connected systems, such as ERP and e-commerce platforms, to ensure smooth operations and accurate order processing.
              </p>
            </div>
          </div>
          {/* Project Image */}
          <div className="mb-12 md:mb-16 flex justify-center pt-12">
            <img
              src="/sphere2.png"
              alt="Dashboard redesign"
              className="w-[1000px] h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Problem Statement Section */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Problem Statement</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our client, a leading logistics and warehouse management company, has been using the SphereWMS platform, which was built on a legacy Unicode-based system. This system lacked an intuitive menu structure, resulting in a disorganized and inefficient user experience. Navigating the system was unwieldy due to the absence of organized menus and clear process flows, significantly impeding productivity and user satisfaction.
              </p>
            </div>
          </div>

          {/* Possible Solution Section */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Possible Solution</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To address these challenges, we propose a comprehensive overhaul of the SphereWMS platform. We'll implement a user-centered design approach, focusing on an intuitive and streamlined interface with a logical menu structure. Clear workflows will guide users through tasks, minimizing wasted time and effort. This modernized platform will empower users, boosting productivity and enhancing user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white pt-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Research</h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Before diving into potential solutions, we recognized the importance of deeply understanding our users and their specific challenges. To achieve this, we conducted user interviews with both active users and those who had recently stopped using the platform. Through this qualitative research, we identified critical pain points and areas of frustration. Our goal was to gather direct feedback and insights to inform our design decisions and ensure that the solutions we proposed would effectively address these challenges.</p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="space-y-6">
            {/* First Quote */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                The current dashboard feels overwhelming. Everything is crammed into one screen, and I often have to scroll or guess where to find the numbers I need. I mostly care about daily sales and delivery updates, but I have to dig through unrelated data to get that.
              </p>
              <p className="mt-4 text-gray-500 text-sm text-right">~ Zain Ul Haq - CEO of discounter.pk</p>
            </div>

            {/* Second Quote */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                I find it really hard to track my finances on the dashboard. There’s no clear summary of what I’ve earned versus what’s pending or deducted. I usually have to export reports or contact support for clarification. A separate finance section with just the key figures would save me so much time.
              </p>
              <p className="mt-4 text-gray-500 text-sm text-right">~ Muddabbir Ali - CEO of SCENTS N SECRETS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usability Testing Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white pt-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">User Journey Map</h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
               Outlining the step-by-step experience of a user interacting with our product or service, it highlights key touchpoints, emotions, and pain points throughout the user's journey.</p>
            </div>
          </div>

          <div className="mb-12 md:mb-16 flex justify-center">
            <img
              src="/sphere3.png"
              alt="Dashboard redesign"
              className="w-[1400px] h-[700px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>


      {/* Solution Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white pt-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Solution</h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                We proposed a comprehensive redesign of the SphereWMS platform, focusing on improving the user experience, enhancing navigation, and streamlining workflows. The solution was designed to overcome the challenges caused by the legacy system, disorganized menus, and inefficient navigation.</p>

              <ul className="list-disc pl-6 mt-4">
                <li>Modular Dashboard Structure</li>
                <li>Intuitive Menu and Clear Process Flows</li>
                <li>Data Visualization and Improved Widgets</li>
                <li>Enhanced UX with Streamlined Navigation</li>
                <li>Mobile Application For Workers </li>
                <li>Enhanced UX with Streamlined Navigation</li>
              </ul>

              <p className="mt-4">
                Each section was tailored to its team’s KPIs, helping reduce noise and allowing users to focus on the metrics that mattered most to them.
              </p>
            </div>
          <div className="mb-12 md:mb-16 flex justify-center">
            <img
              src="/sphere4.png"
              alt="Dashboard redesign"
              className="w-[1300px] h-[1900px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white pt-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Outcome</h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                After launching, we observed significant improvements in usability and team efficiency:
              </p>
              <ul className="space-y-6 pt-4">
                <li className="flex items-start">
                  <span className="text-[#28AFE7] mr-3">🧠</span>
                  <div>
                    <h3 className="text-[#28AFE7] text-xl font-semibold">Enhanced UI Led to a 30% Increase in User Engagement</h3>
                    <p className="text-gray-700">
                      With a more intuitive and visually appealing interface, user engagement increased by 30%, as employees could access the information they needed more efficiently.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-[#28AFE7] mr-3">⚡</span>
                  <div>
                    <h3 className="text-[#28AFE7] text-xl font-semibold">50% Faster Task Completion for Warehouse Workers</h3>
                    <p className="text-gray-700">
                      Warehouse workers completed tasks 50% faster due to the improved user flow, which reduced unnecessary clicks and streamlined workflows.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-[#28AFE7] mr-3">📊</span>
                  <div>
                    <h3 className="text-[#28AFE7] text-xl font-semibold">Improved Decision-Making Speed</h3>
                    <p className="text-gray-700">
                      Teams reported a 25% improvement in decision-making speed, as real-time data visualizations and clear charts made it easier to assess performance metrics.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-[#28AFE7] mr-3">😊</span>
                  <div>
                    <h3 className="text-[#28AFE7] text-xl font-semibold">Increased User Satisfaction</h3>
                    <p className="text-gray-700">
                      85% of users reported a higher level of satisfaction with the redesigned dashboard, appreciating the modern layout, better organization, and simplified tasks.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white pt-12 pb-24">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Learning</h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Reflecting on my experience as a Product Designer in this case study, here are concise key learnings:
              </p>
              <ul className="space-y-6 pt-4">
                <li className="flex items-start">
                  <div>
                    <h3 className="text-[#28AFE7] text-xl font-semibold">Solving Real Pain Points:</h3>
                    <p className="text-gray-700">
                      I learned to treat pain points as clear guidance for smarter, more intuitive design decisions.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div>
                    <h3 className="text-[#28AFE7] text-xl font-semibold">Redesign Requires Empathy, Not Just Aesthetics:</h3>
                    <p className="text-gray-700">
                       Starting from scratch taught me that meaningful redesigns come from deeply understanding user frustrations—not just making things look better.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div>
                    <h3 className="text-[#28AFE7] text-xl font-semibold">Clarity Beats Complexity:</h3>
                    <p className="text-gray-700">
                       I learned that even feature-rich systems fail if users can’t navigate them easily. Simplicity in flow and layout is essential, especially in high-pressure environments like warehouses.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-12 md:mb-16 flex flex-col justify-center items-center pt-12">
              <img
                src="/sphere8.jpg"
                alt="Dashboard redesign"
                className="w-[1100px] h-[400px] object-cover rounded-lg"
              />
              <p className="text-center mt-4 text-[#6C6969]">
                Shispare Team at their Annual Picnic in 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyFooter />
    </div>
  );
}
