import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Business Informatics",
    description: "Bachelor's degree combining technical expertise with business acumen.",
    icon: "🎓"
  },
  {
    title: "Global Logistics Management",
    description: "Managing worldwide IoT device shipments via air and sea freight.",
    icon: "🌐"
  },
  {
    title: "Technical Operations",
    description: "Overseeing IoT device functionality and monitoring systems.",
    icon: "⚙️"
  },
  {
    title: "Customer Support",
    description: "Practical experience in client-facing roles during studies.",
    icon: "👥"
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
