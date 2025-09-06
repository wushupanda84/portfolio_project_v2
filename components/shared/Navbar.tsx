import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center pl-8 md:pl-12 lg:pl-16">
        <div className="flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">SF</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">About</Link>
            <Link href="#features" className="transition-colors hover:text-foreground/80">Features</Link>
            <Link href="#faq" className="transition-colors hover:text-foreground/80">FAQ</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="outline">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
