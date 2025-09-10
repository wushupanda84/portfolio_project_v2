import { Chat } from "@/components/chat/Chat"

export function ChatSection() {
  return (
    <section id="chat" className="container mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Chat</h2>
        <h3 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6">
          Let's Talk
        </h3>
        <p className="max-w-[42rem] text-lg text-muted-foreground leading-relaxed">
          Have questions about my experience or expertise? Feel free to ask!
        </p>
      </div>
      <Chat />
    </section>
  )
}

