import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="container py-16 pl-8 md:pl-12 lg:pl-16">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with Next.js and Shadcn UI. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
