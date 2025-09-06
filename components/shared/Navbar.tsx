import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center pl-8 md:pl-12 lg:pl-16">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-lg tracking-tight">SF</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Button asChild variant="default" size="sm" className="px-4">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
