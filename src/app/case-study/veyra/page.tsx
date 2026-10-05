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
              src="/veyra.png"
              alt="Veyra"
              width={140}
              height={140}
              className="w-auto h-16 object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Veyra —
              <span className="text-[#0496FE]">
                {" "} A Smarter Way to Manage, Move, and Understand Your Money
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
              <p className="font-semibold">Veyra</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-[1200px] mx-auto">
          <Image
            src="/Veyra1.svg"
            alt="Veyra"
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
          Veyra is a modern AI-powered financial app designed to make everyday money management simpler, faster, and more conversational.</p>
         
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6">
The concept brings essential financial experiences into one place — allowing users to send and receive money, manage virtual and physical cards, track transactions, understand their spending, and interact with an AI financial assistant through text or voice.
  </p>
          
        </div>
      </section>


      {/* SEARCH / TALENT DISCOVERY */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="rounded-xl p-6 md:p-10">
            <Image
              src="/Veyra2.svg"
              alt="Veyra Banking"
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
Create a premium digital finance experience that makes managing money feel simple while building trust around every financial action.      </p>

      {/* Goals */}
      <div className="bg-[#007AFF] text-white rounded-lg px-5 py-5 md:px-6 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            
          {/* Left Column */}
          <ul className="space-y-2 text-sm md:text-base">
            <li>• Simplify everyday money management</li>
            <li>• Make sending and receiving money faster</li>
            <li>• Create a seamless virtual and physical card experience</li>
          </ul>

          {/* Right Column */}
          <ul className="space-y-2 text-sm md:text-base">
            <li>• Help users better understand their spending</li>
            <li>• Introduce AI as a natural interface for financial tasks</li>
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

          <div className="rounded-xl p-6 md:p-10">
            <Image
              src="/Veyra3.svg"
              alt="Veyra Banking"
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
I began by analyzing common patterns across digital banking, payment, and fintech products to understand where traditional financial experiences create unnecessary friction.      </p>

      {/* Research Findings */}
      <div className="bg-red-500 text-white rounded-lg p-6 md:p-7 mb-6">
        <p className="text-sm md:text-base mb-3">
          During research, we identified several key pain points:
        </p>

        <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base">
          <li>Users need quick access to their balance and recent financial activity.</li>
          <li>Money transfers should require minimal navigation while maintaining strong confirmation and security.</li>
          <li>Card management is often buried inside settings instead of being treated as a primary experience.</li>
          <li>Transaction histories can become difficult to understand as financial activity grows.</li>
          <li>Users want financial insights without having to manually analyze their spending.</li>
        </ol>
      </div>

      {/* Conclusion */}
      <p className="text-lg md:text-xl text-gray-800">
        This created an opportunity to design Veyra around a simple principle: This created an opportunity to design Veyra around a simple principle:
      </p>
    </div>

          {/* Green */}
            <div>
      <p className="text-xl md:text-2xl font-semibold mb-4">
        Our Approach
      </p>

      <p className="text-base md:text-lg text-gray-800 mb-5">
I focused on designing the complete financial journey rather than treating individual screens as isolated experiences.</p>

      {/* Key Focus Areas */}
      <div className="bg-[#009B5A] text-white rounded-lg px-5 py-5 md:px-6 md:py-6">
        <p className="text-sm md:text-base mb-3">
          Key focus areas:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base">
            <li>Reduce onboarding friction</li>
            <li>Simplify money movement</li>
            <li>Introduce conversational financial assistance</li>
          </ol>

          <ol
            className="list-decimal pl-5 space-y-1.5 text-sm md:text-base"
            start={4}
          >
            <li>Design for voice and text interactions</li>
            <li>Improve transaction visibility</li>
            <li>Create a unified card experience</li>
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
       
I designed Veyra as a unified financial ecosystem where the most important money actions are accessible within a few taps — while AI provides an additional conversational layer.      </p>

      {/* Core Features */}
      <div className="bg-gray-100 rounded-lg px-5 py-5 md:px-6 md:py-6">
        <p className="text-sm md:text-base text-gray-800 mb-3">
          Core features included:
        </p>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base">
            <li>Onboarding & Identity Verification</li>
            <li>Home Dashboard</li>
            <li>Virtual & Physical Cards</li>
          </ol>

          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base" start={4}>
            <li>AI-Powered Money Transfer</li>
            <li>Card Management</li>
            <li>Voice Financial Assistant</li>
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
              src="/Veyra7.svg"
              alt="Veyra Banking"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Onboarding Flow
          </p>
          </div>
        </div>
      </section>

      {/* MAIN PRODUCT SCREEN */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#f7f7f7] rounded-xl p-6 md:p-10">
            <Image
              src="/Veyra4.svg"
              alt="Veyra Banking"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          
          </div>
        </div>
      </section>

      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="rounded-xl p-6 md:p-10">
            <Image
              src="/Veyra5.svg"
              alt="Veyra Banking"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
      
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
        The Veyra concept demonstrates how a traditional financial experience can be reimagined around conversational AI while maintaining the trust and control expected from financial products.
      </p>

      
      
    </div>

  </div>
</section>


      {/* FINAL IMAGE */}
      <section className="px-4 md:px-12 lg:px-16 py-12 pb-24">
        <div className="max-w-6xl mx-auto">

          <Image
            src="/Veyra6.svg"
            alt="Veyra Banking"
            width={1200}
            height={700}
            className="w-full h-auto rounded-xl"
          />

          <h2 className="text-center text-2xl md:text-3xl font-semibold mt-10">
            A smarter way to manage, move, and understand your money.
          </h2>

        </div>
      </section>


      {/* Existing Footer */}
      <CaseStudyFooter />
    </div>
  )
}