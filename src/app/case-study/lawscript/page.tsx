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
<section className="px-4 md:px-12 lg:px-16 bg-white pt-12">
  <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
    {/* Research Section */}
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Research</h2>
      <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
        <p>
        To identify the specific pain points and needs of users, we conducted extensive research, including interviews with law professionals, law students, and legal experts. The feedback gathered highlighted the inefficiency of traditional methods, the time-consuming nature of manual searches, and the lack of a centralized platform for legal information. We also reviewed current legal research methods and tools used in Pakistan, identifying their limitations and gaps.</p>
      </div>
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
          Our approach involved understanding the user’s journey and how legal professionals interacted with legal research platforms. Based on this insight, we designed a simple yet powerful SaaS platform that leveraged AI technology to deliver relevant, accurate, and verified case laws. We focused on user experience, ensuring a seamless and intuitive interface that could easily cater to both students and professionals. The product was designed to be scalable, ensuring that as LawScript grows, its functionality and user base can expand with it.</p>

        <ul className="list-disc pl-6 mt-4 space-y-2">
  <li>
    <span className="font-semibold text-[#DAC397]">Branding:</span> We developed a strong and clear brand identity for LawScript, ensuring that the visual elements aligned with the legal profession’s credibility and professionalism.
  </li>
  <li>
    <span className="font-semibold text-[#DAC397]">Website Design:</span> We crafted a responsive and user-friendly website that allowed users to easily navigate and access the platform’s services.
  </li>
  <li>
    <span className="font-semibold text-[#DAC397]">Product Design (Web & App):</span> We designed both a web and mobile application to ensure accessibility and usability for legal professionals and students alike. These designs incorporated intuitive search features, AI-powered results, and verified case information, all designed to streamline the research process.
  </li>
</ul>

      </div>
    </div>

  </div>
</section>

{/* Solution Section */}
<section className="px-4 md:px-12 lg:px-16 bg-white pt-12">
  <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 md:mb-8">Solution</h2>
      <div className="prose prose-lg max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
        <p>
          The solution we delivered was a fully functional and user-centric web and mobile platform that enables users to:</p>
       <ul className="list-decimal pl-6 mt-4 space-y-2">
  <li>
    <span className="font-semibold text-[#DAC397]">Search for legal cases and citations:</span> Users can quickly search and find relevant legal cases and references.
  </li>
  <li>
    <span className="font-semibold text-[#DAC397]">View verified results:</span> The AI-powered platform provides citation accuracy and proof for each legal reference.
  </li>
  <li>
    <span className="font-semibold text-[#DAC397]">Accessible on any device:</span> The platform is optimized for both web and mobile devices, ensuring users can access information on the go.
  </li>
  <li>
    <span className="font-semibold text-[#DAC397]">Personalized user experience:</span> Each user can save and track cases they are researching, helping them stay organized in their legal studies or practice.
  </li>
</ul>


      </div>
    </div>
 <div className="mb-12 md:mb-16 flex justify-center pt-12">
  <img 
    src="/law3.png" 
    alt="Dashboard redesign"  
    className="w-[1000px] h-[600px] object-cover rounded-lg"  
  />
</div>
<div className="mb-12 md:mb-16 flex justify-center pt-12">
  <img 
    src="/law4.png" 
    alt="Dashboard redesign"  
    className="w-[1000px] h-[600px] object-cover rounded-lg"  
  />
</div>
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
          After launching the LawScript platform, the startup not only observed significant improvements in usability, user engagement, and workflow efficiency but also successfully secured funding.


        </p>

        <ul className="space-y-6 pt-4">
          <li className="flex items-start">
            <span className="text-[#009241] mr-3">⚡</span>
             <div>
              <h3 className="text-[#DAC397] text-xl font-semibold">Funding Achievement</h3>
              <p className="text-gray-700">
               LawScript's rebranding and redesigned platform played a pivotal role in helping the startup secure 1M PKR in funding. This investment will be used to further enhance the platform's features, scale operations, and increase user outreach.
              </p>
            </div>
            
          </li>

          <li className="flex items-start">
            <span className="text-[#009241] mr-3">🧠</span>
            <div>
              <h3 className="text-[#DAC397] text-xl font-semibold">Time Efficiency</h3>
              <p className="text-gray-700">
               Legal professionals reported a 40-50% reduction in time spent on research, as the AI-powered platform streamlined the search and citation process.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-[#009241] mr-3">📊</span>
            <div>
              <h3 className="text-[#DAC397] text-xl font-semibold">Increased Productivity:</h3>
              <p className="text-gray-700">
                Lawyers and students were able to focus on more critical aspects of their cases or studies, enhancing overall productivity.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-[#009241] mr-3">😊</span>
            <div>
              <h3 className="text-[#DAC397] text-xl font-semibold">High User Adoption</h3>
              <p className="text-gray-700">
                Within months of the platform's launch, LawScript saw a growing number of users, including law students and firms, who praised the ease of access to accurate legal data.
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
          From working with LawScript, we gained valuable insights into the legal industry’s unique needs and challenges:
        </p>

        <ul className="space-y-6 pt-4">
          <li className="flex items-start">
            <div>
              <h3 className="text-[#DAC397] text-xl font-semibold">Importance of Accuracy: </h3>
              <p className="text-gray-700">
                  In the legal field, accuracy is paramount, and users need to trust the information they are working with. We ensured that LawScript provided fully verified and accurate legal data at all times.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            
            <div>
              <h3 className="text-[#DAC397] text-xl font-semibold">User-Centered Design:</h3>
              <p className="text-gray-700">
                LawScript emphasized the need for a simple yet powerful user interface, focusing on usability for students and professionals.
              </p>
            </div>
          </li>

          <li className="flex items-start">
           
            <div>
              <h3 className="text-[#DAC397] text-xl font-semibold">Scalable Solutions: </h3>
              <p className="text-gray-700">
               As the platform continues to grow, we ensured that the design was scalable, allowing the platform to handle an increasing number of cases and users without sacrificing performance.
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
