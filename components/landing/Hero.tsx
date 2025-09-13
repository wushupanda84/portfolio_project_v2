import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-6 pb-16 pt-32 md:pt-40 min-h-[70vh] px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-primary">Professional Portfolio</h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Logistics Manager
          <br />
          <span className="text-muted-foreground font-medium">
            Business Informatics Graduate
          </span>
        </h1>
      </div>
      <p className="max-w-[42rem] text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
        Currently managing global IoT device logistics with a Bachelor's degree in Business Informatics. 
        Specializing in international freight operations, ensuring timely delivery and retrieval from operational 
        sites worldwide. Expert in cost and performance controlling, and managing advanced IoT devices with 
        real-time monitoring capabilities.
      </p>
      <div className="flex gap-4 mt-4">
        <Button asChild size="lg" className="px-8">
          <Link href="https://www.linkedin.com/in/sebastian-fink-18968b1a7" target="_blank" rel="noopener noreferrer">Get in touch</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="px-8">
          <Link href="#features">Learn more</Link>
        </Button>
      </div>
    </section>
  )
}
