import { Navigation } from "@/components/navigation"
import { CaseStudyFooter } from "@/components/case-study-footer"
import Image from "next/image"

export default function SkillGigsCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <div className="bg-white">
        <Navigation />
      </div>

      {/* HERO */}
      <section className="px-4 md:px-12 lg:px-16 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/skillgigs.png"
              alt="SkillGigs"
              width={140}
              height={140}
              className="w-auto h-16 object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              SkillGigs —
              <span className="text-[#007AFF]">
                {" "}Helping Professionals Find Better Opportunities Faster
              </span>
            </h1>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-14">
            <div>
              <h3 className="text-gray-500 text-sm mb-2">Year</h3>
              <p className="font-semibold">2026</p>
            </div>

            <div>
              <h3 className="text-gray-500 text-sm mb-2">Platform</h3>
              <p className="font-semibold">Android, iOS</p>
            </div>

            <div>
              <h3 className="text-gray-500 text-sm mb-2">My Role</h3>
              <p className="font-semibold">App Design</p>
            </div>

            <div>
              <h3 className="text-gray-500 text-sm mb-2">Company</h3>
              <p className="font-semibold">Skillgigs</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-[1200px] mx-auto">
          <Image
            src="/skillgigs1.svg"
            alt="Skill Radar dashboard"
            width={1200}
            height={700}
            className="w-full h-auto rounded-xl object-cover"
            priority
          />
        </div>
      </section>


      {/* INTRO */}
      <section className="px-4 md:px-12 lg:px-16 py-10">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Overview
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            SkillGigs is an AI-powered talent marketplace that connects professionals across healthcare, technology, engineering, finance, sales, and other industries with employers through intelligent job matching.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6">
            As the platform evolved, the mobile experience became inconsistent across critical workflows. We redesigned the end-to-end mobile application to create a faster, more intuitive hiring journey—from onboarding and profile creation to job discovery, recruiter conversations, and applications.
          </p>

        </div>
      </section>


      {/* SEARCH / TALENT DISCOVERY */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#f7f7f7] rounded-xl p-6 md:p-10">
            <Image
              src="/skillgigs2.svg"
              alt="Skill Radar talent search"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />

           <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
            This is how the app will look before the redesign.
          </p>
          </div>

        </div>
      </section>


      {/* BUSINESS GOAL */}
      <section className="px-4 md:px-12 lg:px-16 py-10">
  <div className="max-w-4xl mx-auto">

    {/* The Business Goal */}
    <div>
         <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            The Business Goal
          </h2>

      <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
        Deliver a seamless mobile experience that helps professionals build
        stronger profiles, discover better opportunities, and connect with
        recruiters faster.
      </p>

      {/* Goals */}
      <div className="bg-[#007AFF] text-white rounded-lg px-5 py-5 md:px-6 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">

          {/* Left Column */}
          <ul className="space-y-2 text-sm md:text-base">
            <li>• Increase onboarding completion</li>
            <li>• Improve profile completion</li>
            <li>• Increase recruiter engagement</li>
          </ul>

          {/* Right Column */}
          <ul className="space-y-2 text-sm md:text-base">
            <li>• Improve job application conversion</li>
            <li>• Increase SkillCreed Resume adoption</li>
            <li>• Build a scalable mobile design system</li>
          </ul>

        </div>
      </div>

    </div>

  </div>
</section>


      {/* PROFILE EXPERIENCE */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#f7f7f7] rounded-xl p-6 md:p-10">
            <Image
              src="/skillgigs3.svg"
              alt="Skill Radar candidate profile"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          </div>
        <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
          Chat feature before the revamp
          </p>
        </div>
      </section>


      {/* INSIGHTS */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Red */}
          <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Research
            </h3>

      <p className="text-base md:text-lg text-gray-800 mb-5">
        We conducted product analysis, usability testing, stakeholder interviews, and competitor benchmarking to understand where users experienced friction.
      </p>

      {/* Research Findings */}
      <div className="bg-red-500 text-white rounded-lg p-6 md:p-7 mb-6">
        <p className="text-sm md:text-base mb-3">
          During research, we found some issue which is highlighted by the users:
        </p>

        <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base">
          <li>Users wanted to create their profiles with minimal effort.</li>
          <li>Recruiter messages were often overlooked because conversations lacked visibility.</li>
          <li>Candidates wanted a better way to showcase skills, certifications, and experience.</li>
          <li>Users preferred concise job summaries before exploring full descriptions.</li>
          <li>Mobile users expected a modern messaging experience similar to consumer applications.</li>
        </ol>
      </div>

      {/* Conclusion */}
      <p className="text-lg md:text-xl text-gray-800">
        This created a clear opportunity: build a smarter, cleaner, and more reliable mobile experience.
      </p>
    </div>

          {/* Green */}
            <div>
      <p className="text-xl md:text-2xl font-semibold mb-4">
        Our Approach
      </p>

      <p className="text-base md:text-lg text-gray-800 mb-5">
        We focused on redesigning the complete talent journey rather than individual screens.
      </p>

      {/* Key Focus Areas */}
      <div className="bg-[#009B5A] text-white rounded-lg px-5 py-5 md:px-6 md:py-6">
        <p className="text-sm md:text-base mb-3">
          Key focus areas:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base">
            <li>Reduce friction throughout onboarding</li>
            <li>Surface important information faster</li>
            <li>Improve communication</li>
          </ol>

          <ol
            className="list-decimal pl-5 space-y-1.5 text-sm md:text-base"
            start={5}
          >
            <li>Simplify job discovery</li>
            <li>Strengthen professional identity</li>
            <li>Create reusable design components</li>
          </ol>
        </div>
      </div>

    </div>
        

        </div>
      </section>



      {/* THE SOLUTION */}
      <section className="px-4 md:px-12 lg:px-16 py-10">
  <div className="max-w-4xl mx-auto">

    {/* The Solution */}
    <div>
      <p className="text-xl md:text-2xl font-semibold mb-4">
        The Solution
      </p>

      <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
        We redesigned {" "}
        <span className="text-[#007AFF] font-medium">
          SkillGigs App
        </span>
        
        around the most frequently used experiences, ensuring every interaction was faster, cleaner, and easier to navigate.
      </p>

      {/* Core Features */}
      <div className="bg-gray-100 rounded-lg px-5 py-5 md:px-6 md:py-6">
        <p className="text-sm md:text-base text-gray-800 mb-3">
          Core features included:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base">
            <li>Onboarding</li>
            <li>Talent Profile</li>
            <li>Dashboard</li>
          </ol>

          <ol
            className="list-decimal pl-5 space-y-1.5 text-sm md:text-base"
            start={5}
          >
            <li>Job Search and Detail</li>
            <li>Chat Feature</li>
            <li>Bid Feature</li>
          </ol>
        </div>
      </div>

    </div>

  </div>
</section>

        {/* MAIN PRODUCT SCREEN */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#f7f7f7] rounded-xl p-6 md:p-10">
            <Image
              src="/skillgigs4.svg"
              alt="Skill Radar product interface"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Onboarding Flow Revamp
          </p>
          </div>
        </div>
      </section>

      {/* MAIN PRODUCT SCREEN */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#f7f7f7] rounded-xl p-6 md:p-10">
            <Image
              src="/skillgigs5.svg"
              alt="Skill Radar product interface"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Talent Profile & Skill Creed Resume
          </p>
          </div>
        </div>
      </section>


      {/* DEVICE SCREENS */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-[#f7f7f7] rounded-xl p-6">
              <Image
                src="/skillgigs6.svg"
                alt="Skill Radar screen"
                width={700}
                height={500}
                className="w-full h-auto"
              />
              <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Dashboard
          </p>
            </div>

            <div className="bg-[#f7f7f7] rounded-xl p-6">
              <Image
                src="/skillgigs7.svg"
                alt="Skill Radar screen"
                width={700}
                height={500}
                className="w-full h-auto"
              />
              <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
          Chat Feature
          </p>
            </div>


          </div>

        </div>
      </section>


      {/* OUTCOME */}
      <section className="px-4 md:px-12 lg:px-16 py-10">
  <div className="max-w-4xl mx-auto">

    {/* The Solution */}
    <div>
      <p className="text-xl md:text-2xl font-semibold mb-4">
        Outcomes
      </p>

      <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
        The redesigned mobile experience streamlined the complete hiring journey—from onboarding to job applications—creating a faster and more engaging experience for professionals across multiple industries.
      </p>

      {/* Core Features */}
      <div className="bg-gray-100 rounded-lg px-5 py-5 md:px-6 md:py-6">
        <p className="text-sm md:text-base text-gray-800 mb-3">
          Within the first week:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base">
            <li>Simplified onboarding experience</li>
            <li>Higher profile completion</li>
            <li>Improved talent engagement</li>
            <li>Better job discovery</li>
            <li>Increased application completion</li>
            <li>Stronger adoption of SkillCreed Resume</li>
          </ol>

        </div>
      </div>
      <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6 py-5">
        The SkillGigs mobile redesign transformed a fragmented experience into a unified AI-powered platform, enabling professionals across healthcare, technology, engineering, finance, sales, and other industries to showcase their expertise, connect with recruiters, and discover career opportunities with greater speed and confidence.
      </p>
    </div>

  </div>
</section>


      {/* FINAL IMAGE */}
      <section className="px-4 md:px-12 lg:px-16 py-12 pb-24">
        <div className="max-w-6xl mx-auto">

          <Image
            src="/skillgigs8.svg"
            alt="Skill Radar final experience"
            width={1200}
            height={700}
            className="w-full h-auto rounded-xl"
          />

          <h2 className="text-center text-2xl md:text-3xl font-semibold mt-10">
            A Smarter Way to Discover Opportunities, Connect with Recruiters, and Grow Your Career.
          </h2>

        </div>
      </section>


      {/* Existing Footer */}
      <CaseStudyFooter />
    </div>
  )
}