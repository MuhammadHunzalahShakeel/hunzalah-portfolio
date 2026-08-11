import { Navigation } from "@/components/navigation"
import { CaseStudyFooter } from "@/components/case-study-footer"
import Image from "next/image"

export default function SkillRadarCaseStudy() {
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
              Skill Radar —
              <span className="text-[#007AFF]">
                {" "}Helping Employers Discover 1B+ Professionals Faster
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
              <p className="font-semibold">Web App</p>
            </div>

            <div>
              <h3 className="text-gray-500 text-sm mb-2">My Role</h3>
              <p className="font-semibold">Product Design</p>
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
            src="/skillradar1.png"
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
            Skillgigs wanted to move from a traditional hiring model to a subscription-based platform where employers could discover, contact, and hire talent directly.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6">
            We designed Skill Radar, a global talent search platform that gives employers access to 1B+ professional profiles, with tools to invite, communicate, and hire talent through the platform.
          </p>

        </div>
      </section>


      {/* SEARCH / TALENT DISCOVERY */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#f7f7f7] rounded-xl p-6 md:p-10">
            <Image
              src="/skillradar2.png"
              alt="Skill Radar talent search"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />

           <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
            This is how the marketplace looked before the subscription model was introduced. At that time, all talent profiles came from our internal database, which had roughly 250K profiles.
          </p>
          </div>

        </div>
      </section>


      {/* BUSINESS GOAL */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            The Business Goal
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
           Shift from a service-heavy hiring model to a scalable subscription product.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <div className="bg-[#007AFF] text-white rounded-lg p-6">
              <h3 className="font-semibold mb-4">
                Employers needed a faster way to:
              </h3>

              <ul className="space-y-2 text-sm">
                <li>• Search global talent profiles</li>
                <li>• Extract verified contact information</li>
                <li>• Invite talent to Skillgigs</li>
                <li>• Communicate directly on the platform</li>
              </ul>
            </div>

            <div className="bg-[#007AFF] text-white rounded-lg p-6">
              <h3 className="font-semibold mb-4">
                The revenue model included:
              </h3>

              <ul className="space-y-2 text-sm">
                <li>• Monthly subscription plans</li>
                <li>• Credit-based profile/contact unlocks</li>
                <li>• Top-up credits for additional searches</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* PROFILE EXPERIENCE */}
      <section className="px-4 md:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">

          <div className="bg-[#f7f7f7] rounded-xl p-6 md:p-10">
            <Image
              src="/skillradar3.png"
              alt="Skill Radar candidate profile"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          </div>
        <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
          User Profile Before Redesign and subscription modal
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
        Employers wanted access to a large talent pool, but existing platforms
        had major trust issues.
      </p>

      {/* Research Findings */}
      <div className="bg-red-500 text-white rounded-lg p-6 md:p-7 mb-6">
        <p className="text-sm md:text-base mb-3">
          During research, we found that competitors like Loxo often showed:
        </p>

        <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base">
          <li>Irrelevant search results</li>
          <li>Duplicate profiles</li>
          <li>Inaccurate or outdated data</li>
          <li>False contact information</li>
          <li>Too much noise in the search experience</li>
        </ol>
      </div>

      {/* Conclusion */}
      <p className="text-lg md:text-xl text-gray-800">
        This created a clear opportunity: build a smarter, cleaner, and more
        reliable talent search experience.
      </p>
    </div>

          {/* Green */}
            <div>
      <p className="text-xl md:text-2xl font-semibold mb-4">
        Our Approach
      </p>

      <p className="text-base md:text-lg text-gray-800 mb-5">
        We focused on making the search experience simple, fast, and trustworthy.
      </p>

      {/* Key Focus Areas */}
      <div className="bg-[#009B5A] text-white rounded-lg px-5 py-5 md:px-6 md:py-6">
        <p className="text-sm md:text-base mb-3">
          Key focus areas:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base">
            <li>Clean and focused search flow</li>
            <li>Better profile visibility</li>
            <li>Clear credit usage</li>
            <li>Easy contact unlock experience</li>
          </ol>

          <ol
            className="list-decimal pl-5 space-y-1.5 text-sm md:text-base"
            start={5}
          >
            <li>Simple invite and communication flow</li>
            <li>Reduced duplicate and irrelevant profiles</li>
            <li>Subscription-first access model</li>
          </ol>
        </div>
      </div>

    </div>
        

        </div>
      </section>


      {/* VIDEO */}
      <section className="px-4 md:px-12 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">

          <div className="rounded-xl overflow-hidden bg-[#f5f5f5]">
            <video
              className="w-full h-auto block"
              controls
              playsInline
              preload="metadata"
              poster="/skillradar1.png"
            >
              <source
                src="/video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Employers can search for any talent using keywords, and the system displays relevant profiles using data fetched through the ContactOut API.
          </p>

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
        We created{" "}
        <span className="text-[#007AFF] font-medium">
          Skill Radar
        </span>
        , a talent search platform that allows employers to search from{" "}
        <span className="text-[#007AFF] font-medium">
          1B+ global profiles, unlock contact details using credits, invite talent to Skillgigs,
        </span>
        and communicate directly through the platform.
      </p>

      {/* Core Features */}
      <div className="bg-gray-100 rounded-lg px-5 py-5 md:px-6 md:py-6">
        <p className="text-sm md:text-base text-gray-800 mb-3">
          Core features included:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base">
            <li>Global talent search</li>
            <li>Profile detail view</li>
            <li>Contact unlock using credits</li>
            <li>Credit history and top-ups</li>
          </ol>

          <ol
            className="list-decimal pl-5 space-y-1.5 text-sm md:text-base"
            start={5}
          >
            <li>Talent invite flow</li>
            <li>In-platform chat</li>
            <li>Subscription plan management</li>
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
              src="/skillradar4.png"
              alt="Skill Radar product interface"
              width={1200}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Feature Demo
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
                src="/skillradar5.svg"
                alt="Skill Radar screen"
                width={700}
                height={500}
                className="w-full h-auto"
              />
              <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Pricing Screen
          </p>
            </div>

            <div className="bg-[#f7f7f7] rounded-xl p-6">
              <Image
                src="/skillradar6.svg"
                alt="Skill Radar screen"
                width={700}
                height={500}
                className="w-full h-auto"
              />
              <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
          Teams
          </p>
            </div>

            <div className="bg-[#f7f7f7] rounded-xl p-6">
              <Image
                src="/skillradar7.svg"
                alt="Skill Radar screen"
                width={700}
                height={500}
                className="w-full h-auto"
              />
              <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
           Credit Usage
          </p>
            </div>

            <div className="bg-[#f7f7f7] rounded-xl p-6">
              <Image
                src="/skillradar8.svg"
                alt="Skill Radar screen"
                width={700}
                height={500}
                className="w-full h-auto"
              />
              <p className="text-center text-gray-700 mt-8 text-sm md:text-base font-bold">
            Credit Purchase
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
        After launch, Skill Radar showed strong early adoption.
      </p>

      {/* Core Features */}
      <div className="bg-gray-100 rounded-lg px-5 py-5 md:px-6 md:py-6">
        <p className="text-sm md:text-base text-gray-800 mb-3">
          Within the first week:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm md:text-base">
            <li>5+ employers onboarded</li>
            <li>Positive response from early users</li>
            <li>Faster talent discovery experience</li>
            <li>Clearer subscription and credit usage flow</li>
            <li>Reduced dependency on manual sourcing</li>
          </ol>

        </div>
      </div>
      <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6 py-5">
        Skill Radar helped Skillgigs move toward a scalable product-led hiring model.
      </p>
    </div>

  </div>
</section>


      {/* FINAL IMAGE */}
      <section className="px-4 md:px-12 lg:px-16 py-12 pb-24">
        <div className="max-w-6xl mx-auto">

          <Image
            src="/skillradar9.png"
            alt="Skill Radar final experience"
            width={1200}
            height={700}
            className="w-full h-auto rounded-xl"
          />

          <h2 className="text-center text-2xl md:text-3xl font-semibold mt-10">
            A Smarter Way to Search, Unlock, and Hire Global Talent
          </h2>

        </div>
      </section>


      {/* Existing Footer */}
      <CaseStudyFooter />
    </div>
  )
}