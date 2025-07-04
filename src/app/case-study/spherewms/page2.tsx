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

export default function SphereWMSCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="bg-white">
        <Navigation />
      </div>

      {/* Back Button */}
      <div className="px-4 py-4 md:px-12 lg:px-16 bg-white">
        <Link href="/">
          <Button variant="ghost" className="text-black hover:bg-gray-100 p-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      <CaseStudyHero />
      <DashboardShowcase />
      <ProjectBackground />
      <ExistingDashboard />
      <ProposedSolution />
      <DiscoverPhase />
      <UsabilityTesting />
      <DefinePhase />
      <UserJourneyMap />

      <CaseStudyFooter />
    </div>
  )
}
