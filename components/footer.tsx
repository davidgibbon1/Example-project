import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/davidgibbon1",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/davidgibbon1",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/davidgibbon1",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:hello@davidgibbon.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com/davidgibbon1/Example-project"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
