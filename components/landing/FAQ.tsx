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
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[85%] mt-4 text-lg text-muted-foreground">
          Common questions about my experience and expertise
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <Card key={faq.question}>
            <CardHeader>
              <CardTitle className="text-xl">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{faq.answer}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
