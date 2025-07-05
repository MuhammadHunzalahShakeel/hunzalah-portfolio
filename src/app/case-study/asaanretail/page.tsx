import { Navigation } from "@/components/navigation";
import { CaseStudyFooter } from "@/components/case-study-footer";
import Image from "next/image";
export default function AsaanRetailCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="bg-white">
        <Navigation />
      </div>
      <section className="px-4 py-12 md:px-12 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Company Logo */}
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="flex items-center gap-3">
              {/* Logo Placeholder */}
              <div className="w-16 h-16 md:w-20 md:h-20">
                <Image
                  src="/asaanlogo.png"
                  alt="/"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-black">
              A dashboard redesign for{" "}
              <span className="text-[#009241]">
                {" "}
                better performance and user experience
              </span>
            </h1>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            <div>
              <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">
                Year
              </h3>
              <p className="text-black font-semibold text-base md:text-lg">
                2024
              </p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">
                Platform
              </h3>
              <p className="text-black font-semibold text-base md:text-lg">
                Web App
              </p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">
                My Role
              </h3>
              <p className="text-black font-semibold text-base md:text-lg">
                UX Research, UX Design, UI Design
              </p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">
                Company
              </h3>
              <p className="text-black font-semibold text-base md:text-lg">
                SphereWMS
              </p>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <img
            src="/asaan1.png"
            alt="Dashboard redesign"
            className="w-[1200px] h-[700px] object-cover rounded-lg"
          />
        </div>
      </section>
      <section className="px-4 md:px-12 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {/* Background Section */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">
              Background
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                SAAS startup revolutionizing B2B E-commerce Management in
                Southeast Asia. Asaan Retail offers an all-in-one solution,
                meticulously designed to manage inventory, orders, accounting,
                and shipments, thereby simplifying the complexities of digital
                commerce. With an impressive roster of over 200+ B2B clients,
                our services extend across a diverse range of industries,
                including retail, e-commerce, direct-to-consumer (D2C),
                marketing agencies, and third-party logistics (3PL), testament
                to it&apos;s versatility and wide-reaching impact.
              </p>
            </div>
          </div>

          {/* Problem Statement Section */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">
              Problem Statement
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                When I joined Asaan Retail, the existing dashboard presented
                significant usability challenges. The interface was cluttered,
                visually unstructured, and lacked a clear information hierarchy,
                making it difficult for users to navigate. Essential data—such
                as sales metrics, courier performance, and financial
                summaries—were either missing or poorly organized, often crammed
                into a single view. This not only overwhelmed users but also
                hindered their ability to access relevant insights and track
                operational performance efficiently. The absence of a
                user-centric design and contextual segmentation led to
                confusion, reduced productivity, and a frustrating user
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-12 md:mb-16 flex justify-center pt-12">
          <img
            src="/asaan2.png"
            alt="Dashboard redesign"
            className="w-[1000px] h-[500px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Research Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {/* Research Section */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">
              Research
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Before exploring potential solutions, it was essential to
                develop a deep understanding of our users and the challenges
                they faced. To achieve this, we conducted user interviews with
                both active users and those who had recently stopped using the
                platform.
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="space-y-6">
            {/* First Quote */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                The current dashboard feels overwhelming. Everything is crammed
                into one screen, and I often have to scroll or guess where to
                find the numbers I need. I mostly care about daily sales and
                delivery updates, but I have to dig through unrelated data to
                get that.
              </p>
              <p className="mt-4 text-gray-500 text-sm text-right">
                ~ Zain Ul Haq - CEO of discounter.pk
              </p>
            </div>

            {/* Second Quote */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                I find it really hard to track my finances on the dashboard.
                There’s no clear summary of what I’ve earned versus what’s
                pending or deducted. I usually have to export reports or contact
                support for clarification. A separate finance section with just
                the key figures would save me so much time.
              </p>
              <p className="mt-4 text-gray-500 text-sm text-right">
                ~ Muddabbir Ali - CEO of SCENTS N SECRETS
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Usability Testing Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white pt-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {/* Usability Testing Header */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">
              Usability Testing
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                To evaluate the effectiveness of the current dashboard design,
                we conducted usability testing with existing users. The results
                revealed several key issues: users struggled to filter and
                access relevant data, lacked clear visibility into their
                inventory status, and were often confused about how to navigate
                to detailed views—frequently clicking on dashboard cards
                expecting them to be interactive.
              </p>
            </div>
          </div>

          {/* Three Images Section - Horizontal Layout */}
          <div className="flex gap-8 justify-center ">
            <img
              src="/asaan4.png"
              alt="Image 1"
              className="w-[300px] h-[200px] object-cover rounded-lg"
            />
            <img
              src="/asaan5.png"
              alt="Image 2"
              className="w-[300px] h-[200px] object-cover rounded-lg"
            />
            <img
              src="/asaan6.png"
              alt="Image 3"
              className="w-[300px] h-[200px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white pt-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">
              The Approach
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                We began by conducting stakeholder interviews and analyzing how
                different teams (Sales, Inventory, Courier, Finance) use the
                dashboard. Based on user pain points and business needs, we
                proposed a modular restructuring of the dashboard into four
                dedicated sections:
              </p>

              <ul className="list-disc pl-6 mt-4">
                <li>Sales</li>
                <li>Inventory</li>
                <li>Courier</li>
                <li>Finance</li>
              </ul>

              <p className="mt-4">
                Each section was tailored to its team’s KPIs, helping reduce
                noise and allowing users to focus on the metrics that mattered
                most to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white pt-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {/* Background Section */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">
              Solution
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                We restructured the dashboard into four focused modules—Sales,
                Inventory, Courier, and Finance—each containing only relevant
                widgets. This reduced clutter and helped users focus on their
                specific tasks. Widgets were redesigned for clarity, using clean
                charts, summary cards, and filters for deeper insights. We also
                enhanced the UX with a clear layout hierarchy, responsive
                design, and tooltips for better usability and comprehension
              </p>
            </div>
          </div>
        </div>
        <div className="mb-12 md:mb-16 flex justify-center pt-12">
          <img
            src="/asaan7.png"
            alt="Dashboard redesign"
            className="w-[1300px] h-[1900px] object-cover rounded-lg"
          />
        </div>
      </section>
      {/* Outcome Section */}
      <section className="px-4 md:px-12 lg:px-16 bg-white pt-12">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {/* Outcome Section */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">
              Outcome
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                After launching the redesigned dashboard, we observed
                significant improvements in usability and team efficiency:
              </p>

              <ul className="space-y-6 pt-4">
                <li className="flex items-start">
                  <span className="text-[#009241] mr-3">🧠</span>
                  <div>
                    <h3 className="text-[#009241] text-xl font-semibold">
                      37% Reduction in Time to Find Data
                    </h3>
                    <p className="text-gray-700">
                      Users were able to focus faster with clearer,
                      role-specific dashboards.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-[#009241] mr-3">⚡</span>
                  <div>
                    <h3 className="text-[#009241] text-xl font-semibold">
                      Improved Decision-Making Speed
                    </h3>
                    <p className="text-gray-700">
                      Teams reported quicker analysis and more confident, timely
                      decisions.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-[#009241] mr-3">📊</span>
                  <div>
                    <h3 className="text-[#009241] text-xl font-semibold">
                      Better Task Alignment Across Departments
                    </h3>
                    <p className="text-gray-700">
                      Modular sections allowed each team to view only what
                      mattered to them.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-[#009241] mr-3">😊</span>
                  <div>
                    <h3 className="text-[#009241] text-xl font-semibold">
                      Increased User Satisfaction
                    </h3>
                    <p className="text-gray-700">
                      Users gave positive feedback on the simplified layout and
                      improved clarity.
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">
              Learning
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Reflecting on my experience as a Product Designer in this case
                study, here are concise key learnings:
              </p>

              <ul className="space-y-6 pt-4">
                <li className="flex items-start">
                  <div>
                    <h3 className="text-[#009241] text-xl font-semibold">
                      User-Centric Design:
                    </h3>
                    <p className="text-gray-700">
                      Emphasized the importance of basing decisions on user
                      needs and feedback.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div>
                    <h3 className="text-[#009241] text-xl font-semibold">
                      Design for Action, Not Just Visuals:
                    </h3>
                    <p className="text-gray-700">
                      Each widget was built to drive decisions—not just look
                      good—ensuring every component had a clear purpose.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div>
                    <h3 className="text-[#009241] text-xl font-semibold">
                      Stakeholder Feedback is Crucial:
                    </h3>
                    <p className="text-gray-700">
                      Engaging users early helped validate assumptions and align
                      the design with real-world workflows.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyFooter />
    </div>
  );
}
