import { Hero1 } from "@/components/blocks/hero1"
import { Navbar } from "@/components/blocks/navbar"
import Features02 from "@/components/blocks/features-02"
import Team03 from "@/components/blocks/team-03"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero1 
          badge="🔬CCIS Laboratory Room Management System"
          heading="CCIS Room & Equipment Hub"
          description="Reserve and find the best room for your needs, book equipment, and manage your CCIS resources all in one place. "
          buttons={{
            primary: {
              text: "Get Started",
              url: "/login"
            },
            secondary: {
              text: "Learn More",
              url: "#features"
            }
          }}
          image={{
            src: "/pup_pic.jpg",
            alt: "Lab Room workspace preview"
          }}
        />
        <div id="features">
          <Features02 />
        </div>
        <div id="team" className="bg-muted/50">
          <Team03 />
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 CCIS Laboratory. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 ml-auto">
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
} 