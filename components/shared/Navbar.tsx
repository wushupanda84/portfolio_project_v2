import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-lg tracking-tight">SF</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
            <Link href="#chat" className="text-muted-foreground hover:text-foreground transition-colors">Chat</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Button asChild variant="default" size="sm" className="px-4">
            <Link href="https://www.linkedin.com/in/sebastian-fink-18968b1a7" target="_blank" rel="noopener noreferrer">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
