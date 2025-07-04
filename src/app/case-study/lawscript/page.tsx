import { Navigation } from "@/components/navigation"
import { CaseStudyHero } from "@/components/case-study-hero"
import { DashboardShowcase } from "@/components/dashboard-showcase"
import { ProjectBackground } from "@/components/project-background"
import { ExistingDashboard } from "@/components/existing-dashboard"
import { ProposedSolution } from "@/components/proposed-solution"
import { DiscoverPhase } from "@/components/discover-phase"
import { UsabilityTesting } from "@/components/usability-testing"
import { DefinePhase } from "@/components/define-phase"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { UserJourneyMap } from "@/components/user-journey-map"
import { CaseStudyFooter } from "@/components/case-study-footer"
import Image from "next/image"
export default function LawScriptCaseStudy() {
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
        <div className="">
          <Image
            src="/lawlogo.png"
            alt="/"
            width={140}
            height={140}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>

    {/* Main Headline */}
    <div className="mb-12 md:mb-16 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-black">
        Designing an  <span className="text-[#DAC397]"> AI-Driven saas solution for law firms</span>
      </h1>
    </div>

    {/* Project Details */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
      <div>
        <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">Year</h3>
        <p className="text-black font-semibold text-base md:text-lg">2024</p>
      </div>
      <div>
        <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">Platform</h3>
        <p className="text-black font-semibold text-base md:text-lg">Web App</p>
      </div>
      <div>
        <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">My Role</h3>
        <p className="text-black font-semibold text-base md:text-lg">Branding, Website Design, UI UX Design </p>
      </div>
      <div>
        <h3 className="text-gray-500 text-sm md:text-base mb-2 md:mb-3 font-medium">Company</h3>
        <p className="text-black font-semibold text-base md:text-lg">LawScript</p>
      </div>
    </div>
  </div>

  {/* Project Image */}
  <div className="mb-12 md:mb-16 flex justify-center">
    <img 
      src="/law1.png" 
      alt="Dashboard redesign"  
      className="w-[1200px] h-[700px] object-cover rounded-lg"  
    />
  </div>
</section>
<section className="px-4 md:px-12 lg:px-16 bg-white">
  <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
    {/* Background Section */}
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Background</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        LawScript is a forward-thinking SaaS platform designed to assist law firms, law students, and legal professionals in Pakistan. The platform utilizes AI to provide accurate and reliable legal information, including case citations, case laws, and legal references. LawScript aims to revolutionize the outdated and traditional methods currently used in the Pakistani legal industry for research, legal citations, and case verification. Prior to LawScript, legal professionals faced the challenge of manually sifting through vast amounts of data on the internet to find accurate, verified legal references.
        </p>
      </div>
    </div>

    {/* Problem Statement Section */}
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Problem Statement</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          In Pakistan, law students and lawyers have been struggling with outdated methods of legal research. The existing processes for finding case law and citations are inefficient, requiring hours of manual search on various websites, often with inconsistent or unreliable results. There was no unified platform to access verified legal data, which led to difficulties in confirming the authenticity of cases, citations, and legal references. Lawyers and students often lacked an efficient and trustworthy resource to help them with case studies, research, and citations that are essential for their practice.
        </p>
      </div>
    </div>
  </div>
  <div className="mb-12 md:mb-16 flex justify-center pt-12">
  <img 
    src="/law2.png" 
    alt="Dashboard redesign"  
    className="w-[1100px] h-[800px] object-cover rounded-lg"  
  />
</div>
</section>

<section className="px-4 md:px-12 lg:px-16 bg- pt-12">
  <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
    {/* Background Section */}
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Possible Solution</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        LawScript emerged as a solution to this widespread issue by providing a comprehensive AI-powered platform for the legal industry. The platform centralizes case laws, legal references, and citations, delivering them with verified proof and up-to-date information. This platform ensures that legal professionals can access reliable data quickly and efficiently, eliminating the need for time-consuming searches across multiple platforms. By using AI, LawScript is able to automate and optimize the search process, enabling users to find accurate legal information with proper citation and proof at their fingertips.</p>
      </div>
    </div>
  </div>
</section>
{/* Research Section */}
<section className="px-4 md:px-12 lg:px-16 bg-white">
  <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
    {/* Research Section */}
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Research</h2>
      <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
        <p>
          Before exploring potential solutions, it was essential to develop a deep understanding of our users and the challenges they faced. To achieve this, we conducted user interviews with both active users and those who had recently stopped using the platform.
        </p>
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
    {/* Usability Testing Header */}
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Usability Testing</h2>
      <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
        <p>
          To evaluate the effectiveness of the current dashboard design, we conducted usability testing with existing users. The results revealed several key issues: users struggled to filter and access relevant data, lacked clear visibility into their inventory status, and were often confused about how to navigate to detailed views—frequently clicking on dashboard cards expecting them to be interactive.
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
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">The Approach</h2>
      <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
        <p>
          We began by conducting stakeholder interviews and analyzing how different teams (Sales, Inventory, Courier, Finance) use the dashboard. Based on user pain points and business needs, we proposed a modular restructuring of the dashboard into four dedicated sections:
        </p>

        <ul className="list-disc pl-6 mt-4">
          <li>Sales</li>
          <li>Inventory</li>
          <li>Courier</li>
          <li>Finance</li>
        </ul>

        <p className="mt-4">
          Each section was tailored to its team’s KPIs, helping reduce noise and allowing users to focus on the metrics that mattered most to them.
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
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Solution</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        We restructured the dashboard into four focused modules—Sales, Inventory, Courier, and Finance—each containing only relevant widgets. This reduced clutter and helped users focus on their specific tasks.
Widgets were redesigned for clarity, using clean charts, summary cards, and filters for deeper insights.
We also enhanced the UX with a clear layout hierarchy, responsive design, and tooltips for better usability and comprehension
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
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Outcome</h2>
      <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
        <p>
          After launching the redesigned dashboard, we observed significant improvements in usability and team efficiency:
        </p>

        <ul className="space-y-6 pt-4">
          <li className="flex items-start">
            <span className="text-[#009241] mr-3">🧠</span>
            <div>
              <h3 className="text-[#009241] text-xl font-semibold">37% Reduction in Time to Find Data</h3>
              <p className="text-gray-700">
                Users were able to focus faster with clearer, role-specific dashboards.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-[#009241] mr-3">⚡</span>
            <div>
              <h3 className="text-[#009241] text-xl font-semibold">Improved Decision-Making Speed</h3>
              <p className="text-gray-700">
                Teams reported quicker analysis and more confident, timely decisions.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-[#009241] mr-3">📊</span>
            <div>
              <h3 className="text-[#009241] text-xl font-semibold">Better Task Alignment Across Departments</h3>
              <p className="text-gray-700">
                Modular sections allowed each team to view only what mattered to them.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-[#009241] mr-3">😊</span>
            <div>
              <h3 className="text-[#009241] text-xl font-semibold">Increased User Satisfaction</h3>
              <p className="text-gray-700">
                Users gave positive feedback on the simplified layout and improved clarity.
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
              <h3 className="text-[#009241] text-xl font-semibold">User-Centric Design:</h3>
              <p className="text-gray-700">
                 Emphasized the importance of basing decisions on user needs and feedback.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            
            <div>
              <h3 className="text-[#009241] text-xl font-semibold">Design for Action, Not Just Visuals:</h3>
              <p className="text-gray-700">
                Each widget was built to drive decisions—not just look good—ensuring every component had a clear purpose.
              </p>
            </div>
          </li>

          <li className="flex items-start">
           
            <div>
              <h3 className="text-[#009241] text-xl font-semibold">Stakeholder Feedback is Crucial:</h3>
              <p className="text-gray-700">
                Engaging users early helped validate assumptions and align the design with real-world workflows.
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
  )
}
