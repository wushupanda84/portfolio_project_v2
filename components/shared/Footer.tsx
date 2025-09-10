import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <Separator className="mb-10" />
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-left">
          Built with Next.js and Shadcn UI.
          <br className="md:hidden" />
          © 2024. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
