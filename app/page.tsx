import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { FAQ } from "@/components/landing/FAQ"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}