import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { FAQ } from "@/components/landing/FAQ"
import { ChatSection } from "@/components/landing/ChatSection"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Features />
        <FAQ />
        <ChatSection />
      </main>
      <Footer />
    </div>
  )
}