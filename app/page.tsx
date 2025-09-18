import Link from "next/link"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProjects, getPosts } from "@/lib/mdx"

export default async function Home() {
  const projects = await getProjects()
  const posts = await getPosts()
  
  const featuredProjects = projects.filter(p => p.frontmatter.featured).slice(0, 3)
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="container py-6 lg:py-10">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:pb-16 lg:pt-12">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Hey, I'm David Gibbon
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            I'm a software developer passionate about building beautiful, functional applications
            and sharing knowledge through writing. I specialize in modern web technologies and
            love creating tools that solve real problems.
          </p>
        </div>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.frontmatter.slug} className="group hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link href={`/projects/${project.frontmatter.slug}`}>
                      {project.frontmatter.title}
                    </Link>
                  </CardTitle>
                  <div className="flex gap-2">
                    {project.frontmatter.links?.repo && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={project.frontmatter.links.repo} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.frontmatter.links?.demo && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={project.frontmatter.links.demo} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription>{project.frontmatter.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.frontmatter.tech.slice(0, 3).map((tech: string) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.frontmatter.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.frontmatter.tech.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Writing */}
      {recentPosts.length > 0 && (
        <section className="py-8 md:py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Recent Writing</h2>
              <p className="text-muted-foreground">Latest thoughts and tutorials</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/writing">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Card key={post.frontmatter.slug} className="group hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link href={`/writing/${post.frontmatter.slug}`}>
                      {post.frontmatter.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.frontmatter.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.frontmatter.tags.slice(0, 3).map((tag: string) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    {post.readingTime.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
