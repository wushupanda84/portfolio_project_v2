import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const faqs = [
  {
    question: "What is your current role?",
    answer: "I currently manage global logistics for IoT devices, ensuring their delivery and retrieval worldwide through various freight methods."
  },
  {
    question: "What is your educational background?",
    answer: "I hold a Bachelor's degree in Business Informatics, providing me with a strong foundation in both technical and business domains."
  },
  {
    question: "What technical skills do you possess?",
    answer: "I specialize in IoT device management, monitoring systems, and technical operations, alongside experience in customer support and logistics management."
  },
  {
    question: "What makes your experience unique?",
    answer: "My combination of technical expertise in IoT device management and practical experience in global logistics provides a unique perspective in bridging technical operations with business needs."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="container py-24 sm:py-32 pl-8 md:pl-12 lg:pl-16">
      <div className="mb-16 flex flex-col items-start">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">FAQ</h2>
        <h3 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6">
          Common Questions
        </h3>
        <p className="max-w-[42rem] text-lg text-muted-foreground leading-relaxed">
          Answers to frequently asked questions about my experience and expertise
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
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
