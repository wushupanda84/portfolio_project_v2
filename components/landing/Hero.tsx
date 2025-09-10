import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-6 pb-16 pt-32 md:pt-40 min-h-[70vh] px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-primary">Professional Portfolio</h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Business Informatics
          <br />
          <span className="text-muted-foreground font-medium">
            IoT Logistics Expert
          </span>
        </h1>
      </div>
      <p className="max-w-[42rem] text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
        Bridging technical expertise with business acumen. Specializing in global IoT device logistics
        and technical operations management.
      </p>
      <div className="flex gap-4 mt-4">
        <Button asChild size="lg" className="px-8">
          <Link href="#contact">Get in touch</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="px-8">
          <Link href="#features">Learn more</Link>
        </Button>
      </div>
    </section>
  )
}
