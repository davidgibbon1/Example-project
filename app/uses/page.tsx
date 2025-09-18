import { Metadata } from "next"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getUses } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Uses",
  description: "A list of hardware, software, and tools I use for development and daily work.",
}

export default async function Uses() {
  const uses = await getUses()
  
  // Fallback data if no uses.mdx file exists
  const defaultUses = {
    sections: [
      {
        title: "Development",
        items: [
          { name: "Visual Studio Code", note: "Primary editor with Vim keybindings" },
          { name: "Terminal", note: "iTerm2 with Oh My Zsh" },
          { name: "Git", note: "Version control" },
          { name: "Docker", note: "Containerization" },
        ]
      },
      {
        title: "Hardware",
        items: [
          { name: "MacBook Pro", note: "Primary development machine" },
          { name: "External Monitor", note: "For extended screen real estate" },
          { name: "Mechanical Keyboard", note: "Better typing experience" },
          { name: "Ergonomic Mouse", note: "Reduces wrist strain" },
        ]
      },
      {
        title: "Software",
        items: [
          { name: "Figma", note: "Design and prototyping" },
          { name: "Notion", note: "Note-taking and project management" },
          { name: "Spotify", note: "Music while coding" },
          { name: "1Password", note: "Password management" },
        ]
      },
    ]
  }
  
  const usesData = uses || defaultUses
  
  return (
    <div className="container py-6 lg:py-10">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Uses
          </h1>
          <p className="text-lg text-muted-foreground">
            A list of hardware, software, and tools I use for development and daily work
          </p>
        </div>
        
        <div className="mt-8 space-y-8">
          {usesData.sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="text-2xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.items.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{item.name}</h3>
                        {'link' in item && item.link && (
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                      {item.note && (
                        <p className="text-sm text-muted-foreground">{item.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 prose prose-lg max-w-none dark:prose-invert">
          <p>
            This page is inspired by <Link href="https://uses.tech" target="_blank" rel="noopener noreferrer" className="underline">uses.tech</Link> - 
            a list of /uses pages detailing developer setups, gear, software and configs.
          </p>
          <p>
            The tools and hardware I use evolve over time, so I try to keep this page updated 
            with my current setup. If you have any questions about anything listed here, 
            feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  )
}
