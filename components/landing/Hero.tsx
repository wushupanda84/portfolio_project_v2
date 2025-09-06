import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-4 pb-8 pt-24 md:pt-32 min-h-[60vh] text-center pl-8 md:pl-12 lg:pl-16">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
        Business Informatics Graduate
        <br />
        <span className="text-muted-foreground">
          with Global IoT Logistics Expertise
        </span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Bridging technical expertise with business acumen. Specializing in global IoT device logistics
        and technical operations management.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="#contact">Get in touch</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="#features">Learn more</Link>
        </Button>
      </div>
    </section>
  )
}
