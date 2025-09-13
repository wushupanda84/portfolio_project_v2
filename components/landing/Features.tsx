import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Global Logistics Management",
    description: "Planning and managing international freight methods including air and sea shipments for IoT devices worldwide, ensuring timely delivery and retrieval from operational sites.",
    icon: "🌐"
  },
  {
    title: "IoT Device Operations",
    description: "Managing advanced IoT devices with real-time monitoring capabilities for security, temperature, and humidity throughout the supply chain journey.",
    icon: "📡"
  },
  {
    title: "Cost & Performance Control",
    description: "Proficient in cost and performance controlling, demand and inventory planning to ensure service readiness and operational efficiency.",
    icon: "📊"
  },
  {
    title: "AI Development",
    description: "AI Maker Bootcamp graduate with expertise in GenAI application development, prompt engineering, and full-stack integration using modern platforms.",
    icon: "🤖"
  },
  {
    title: "International Collaboration",
    description: "Experience in direct customer contact and close collaboration with international management teams, with negotiation-fluent English.",
    icon: "👥"
  },
  {
    title: "Supply Chain Visibility",
    description: "Expertise in providing clients with end-to-end supply chain visibility through real-time cargo monitoring and analytics.",
    icon: "🔍"
  }
]

export function Features() {
  return (
    <section id="features" className="container mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Expertise</h2>
        <h3 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6">
          Core Competencies
        </h3>
        <p className="max-w-[42rem] text-lg text-muted-foreground leading-relaxed">
          Combining technical expertise with practical business experience to deliver comprehensive solutions
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="border-none shadow-lg bg-card hover:bg-accent/10 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <span className="text-3xl">{feature.icon}</span>
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
