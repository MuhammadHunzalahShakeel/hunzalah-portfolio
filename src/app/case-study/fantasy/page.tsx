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
              src="/fantasy.png"
              alt="Fantasy Banking"
              width={140}
              height={140}
              className="w-auto h-16 object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fantasy Banking —
              <span className="text-[#007AFF]">
                {" "} AI-powered digital banking platform
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
              <p className="font-semibold">Fantasy Banking</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-[1200px] mx-auto">
          <Image
            src="/fantasy1.svg"
            alt="Fantasy Banking"
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
          Fantasy Banking is a digital-first financial platform with AI intelligence embedded throughout. Instead of traditional banking interfaces, the platform offers dynamic savings pots, algorithmic investment hubs, seamless multi-currency transfers, and a native AI financial copilot, transforming how users save, invest, and manage money digitally.</p>
         
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6">
          Users face fragmented financial services, traditional banks lack digital innovation, international transfers are slow and expensive, savings tools are rigid, and investment opportunities are inaccessible. Users juggle multiple apps for different financial needs, losing context and paying excessive fees. Financial advice remains out of reach for everyday users.
          </p>
          
        </div>
      </section>


      {/* SEARCH / TALENT DISCOVERY */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#f7f7f7] rounded-xl p-6 md:p-10">
            <Image
              src="/fantasy2.svg"
              alt="Fantasy Banking"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />

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
        Create a seamless digital banking experience that makes everyday financial management simpler, smarter, and more accessible for Caribbean consumers.
      </p>

      {/* Goals */}
      <div className="bg-[#007AFF] text-white rounded-lg px-5 py-5 md:px-6 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            
          {/* Left Column */}
          <ul className="space-y-2 text-sm md:text-base">
            <li>• Seamless domestic and international experience.</li>
            <li>• Create automated, goal-based savings structures.</li>
            <li>• Democratize access to micro-investments.</li>
          </ul>

          {/* Right Column */}
          <ul className="space-y-2 text-sm md:text-base">
            <li>• Provide AI-powered financial guidance 24/7.</li>
            <li>• Build trust through transparent, real-time controls.</li>
            <li>• Simplify financial management into one connected mobile experience.</li>
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
              src="/fantasy3.svg"
              alt="Fantasy Banking"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          </div>
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
        We conducted product analysis, user research, and competitor benchmarking to understand how users manage money and where existing financial services fall short.
      </p>

      {/* Research Findings */}
      <div className="bg-red-500 text-white rounded-lg p-6 md:p-7 mb-6">
        <p className="text-sm md:text-base mb-3">
          During research, we identified several key pain points:
        </p>

        <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base">
          <li>Traditional banking lacks modern digital experiences and automation.</li>
          <li>International transfers are slow, expensive, and often opaque.</li>
          <li>Savings tools are rigid and lack goal-oriented structures.</li>
          <li>Investment opportunities remain inaccessible to everyday users.</li>
          <li>Users have limited access to personalized financial guidance.</li>
        </ol>
      </div>

      {/* Conclusion */}
      <p className="text-lg md:text-xl text-gray-800">
        This revealed a clear opportunity to create a simpler, more connected banking experience that gives users greater control over their financial lives.
      </p>
    </div>

          {/* Green */}
            <div>
      <p className="text-xl md:text-2xl font-semibold mb-4">
        Our Approach
      </p>

      <p className="text-base md:text-lg text-gray-800 mb-5">
        We focused on redesigning the complete financial journey rather than treating individual banking tasks as separate experiences.
      </p>

      {/* Key Focus Areas */}
      <div className="bg-[#009B5A] text-white rounded-lg px-5 py-5 md:px-6 md:py-6">
        <p className="text-sm md:text-base mb-3">
          Key focus areas:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base">
            <li>Simplify everyday banking</li>
            <li>Reduce friction in money transfers</li>
            <li>Create flexible, goal-based savings</li>
          </ol>

          <ol
            className="list-decimal pl-5 space-y-1.5 text-sm md:text-base"
            start={5}
          >
            <li>Provide personalized financial insights</li>
            <li>Increase transparency and user control</li>
            <li>Build a scalable, intuitive mobile experience</li>
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
       
        We designed Fantasy Banking as a modern and intuitive digital banking experience that brings everyday financial needs into one seamless platform.
        The solution combines multi-currency transactions, financial goals, budgeting, and spending insights to help users manage their money with greater clarity and confidence.
      </p>

      {/* Core Features */}
      <div className="bg-gray-100 rounded-lg px-5 py-5 md:px-6 md:py-6">
        <p className="text-sm md:text-base text-gray-800 mb-3">
          Core features included:
        </p>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base">
            <li>Seamless Onboarding</li>
            <li>Multi-Currency Transactions</li>
            <li>Financial Goals</li>
          </ol>

          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base" start={5}>
            <li>Spending Insights</li>
            <li>Personalized Financial Guidance</li>
            <li>Investment & Savings Tools</li>
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
              src="/fantasy4.png"
              alt="Fantasy Banking"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Login Flow
          </p>
          </div>
        </div>
      </section>

      {/* MAIN PRODUCT SCREEN */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#f7f7f7] rounded-xl p-6 md:p-10">
            <Image
              src="/fantasy5.png"
              alt="Fantasy Banking"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Account Creation and KYC
          </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#f7f7f7] rounded-xl p-6 md:p-10">
            <Image
              src="/fantasy6.png"
              alt="Fantasy Banking"
              width={1200}
              className="w-full h-auto rounded-lg"
            />
          <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Other Screen
          </p>
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
        Currently in development — launching soon.
      </p>

      
      
    </div>

  </div>
</section>


      {/* FINAL IMAGE */}
      <section className="px-4 md:px-12 lg:px-16 py-12 pb-24">
        <div className="max-w-6xl mx-auto">

          <Image
            src="/fantasy7.png"
            alt="Fantasy Banking"
            width={1200}
            height={700}
            className="w-full h-auto rounded-xl"
          />

          <h2 className="text-center text-2xl md:text-3xl font-semibold mt-10">
            A Smarter Way to Manage Your Money, Make Payments, and Grow Your Wealth.
          </h2>

        </div>
      </section>


      {/* Existing Footer */}
      <CaseStudyFooter />
    </div>
  )
}