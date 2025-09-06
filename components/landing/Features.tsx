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
    <section id="features" className="container py-24 sm:py-32 pl-8 md:pl-12 lg:pl-16">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Core Competencies
        </h2>
        <p className="max-w-[85%] mt-4 text-lg text-muted-foreground">
          Combining technical expertise with practical business experience
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2 text-2xl">{feature.icon}</span>
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
