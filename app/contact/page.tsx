import { Metadata } from "next"
import Link from "next/link"
import { Mail, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with David Gibbon for collaborations, questions, or just to say hello.",
}

const socialLinks = [
  {
    name: "Email",
    href: "mailto:hello@davidgibbon.com",
    icon: Mail,
    description: "Best way to reach me",
    color: "bg-red-500",
  },
  {
    name: "GitHub",
    href: "https://github.com/davidgibbon1",
    icon: Github,
    description: "Check out my code",
    color: "bg-gray-800 dark:bg-gray-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/davidgibbon1",
    icon: Twitter,
    description: "Follow for updates",
    color: "bg-blue-400",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/davidgibbon1",
    icon: Linkedin,
    description: "Professional network",
    color: "bg-blue-600",
  },
]

export default function Contact() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
        </div>
        
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                Whether you have a project in mind, want to collaborate, or just want to 
                say hello, I'm always open to connecting with fellow developers, designers, 
                and interesting people.
              </p>
              
              <p>
                I'm particularly interested in:
              </p>
              
              <ul>
                <li>Freelance and contract opportunities</li>
                <li>Open source collaborations</li>
                <li>Speaking at events or podcasts</li>
                <li>Technical discussions and knowledge sharing</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Current Status</h3>
              <div className="flex items-center gap-2">
                <Badge variant="default" className="bg-green-500">
                  Available
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Open to new opportunities
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                I typically respond to emails within 24-48 hours. For urgent matters, 
                please mention it in the subject line.
              </p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Connect with me</h3>
            <div className="grid gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Card key={link.name} className="group hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4"
                      >
                        <div className={`p-3 rounded-lg ${link.color} text-white`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            {link.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Message</CardTitle>
                <CardDescription>
                  For a quick message, you can also reach out directly via email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="mailto:hello@davidgibbon.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 prose prose-lg max-w-none dark:prose-invert">
          <h2>FAQ</h2>
          
          <h3>Do you take on freelance projects?</h3>
          <p>
            Yes! I'm currently available for freelance and contract work. 
            I'm particularly interested in React/Next.js projects, but I'm 
            open to discussing other opportunities as well.
          </p>
          
          <h3>Can you help with my existing project?</h3>
          <p>
            Absolutely. I enjoy helping with code reviews, architecture decisions, 
            performance optimization, and general development guidance.
          </p>
          
          <h3>Do you do speaking engagements?</h3>
          <p>
            I'd be happy to speak at your event or appear on your podcast. 
            I can talk about web development, React, Next.js, or my experience 
            building various projects.
          </p>
        </div>
      </div>
    </div>
  )
}
