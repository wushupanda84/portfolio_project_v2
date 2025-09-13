import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const faqs = [
  {
    question: "What is your current role as a Logistics Manager?",
    answer: "I am responsible for the global logistics of IoT devices, ensuring their timely delivery to and retrieval from operational sites worldwide. This involves planning and managing international freight methods including air and sea shipments to meet diverse and time-sensitive requirements, while providing clients with end-to-end supply chain visibility through real-time cargo monitoring."
  },
  {
    question: "What technical aspects do you manage with IoT devices?",
    answer: "I manage the technical functionality of advanced IoT devices that monitor their own shipment conditions, including security, temperature, and humidity. This ensures device integrity throughout the journey and provides real-time monitoring capabilities for comprehensive supply chain visibility."
  },
  {
    question: "What is your experience with AI and development?",
    answer: "I completed an intensive 6-weekend AI Maker Bootcamp focused on building real-world AI-powered applications. This included GenAI application development, prompt engineering, multi-agent design, full-stack integration, and deployment using modern platforms like Vercel. I also gained experience in Chrome Extension development and Python game development."
  },
  {
    question: "How do you handle international operations and collaboration?",
    answer: "I have extensive experience in direct customer contact and close collaboration with international management teams. With negotiation-fluent English and a networked, analytical mindset, I'm well-equipped to contribute to dynamic logistics teams and enhance operational efficiency across global operations."
  },
  {
    question: "What makes your logistics expertise unique?",
    answer: "My combination of technical expertise in IoT device management, practical experience in global logistics, and recent AI development training provides a unique perspective. I can bridge technical operations with business needs while leveraging modern AI tools to optimize logistics processes and enhance supply chain visibility."
  },
  {
    question: "What are your key competencies in logistics management?",
    answer: "I am proficient in cost and performance controlling, demand and inventory planning, and ensuring service readiness. My expertise includes planning worldwide transports, controlling inventory, and managing a global pool of sensor devices that are crucial for providing comprehensive supply chain monitoring and analytics."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="container mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">FAQ</h2>
        <h3 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6">
          Common Questions
        </h3>
        <p className="max-w-[42rem] text-lg text-muted-foreground leading-relaxed">
          Answers to frequently asked questions about my experience and expertise
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {faqs.map((faq) => (
          <Card key={faq.question} className="border-none shadow-lg bg-card hover:bg-accent/10 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">{faq.answer}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
