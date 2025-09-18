import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getProject, getProjects } from "@/lib/mdx"
import { formatDate } from "@/lib/utils"
import { MDXRemote } from "next-mdx-remote/rsc"
import { useMDXComponents } from "@/components/mdx-components"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = await getProjects()
  
  return projects.map((project) => ({
    slug: project.frontmatter.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await getProject(params.slug)
  
  if (!project) {
    return {}
  }
  
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      type: "article",
      publishedTime: project.frontmatter.date,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug)
  
  if (!project) {
    notFound()
  }
  
  return (
    <div className="container py-6 lg:py-10">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        
        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={
              project.frontmatter.status === 'shipped' ? 'default' :
              project.frontmatter.status === 'wip' ? 'secondary' : 'outline'
            }>
              {project.frontmatter.status}
            </Badge>
            {project.frontmatter.featured && (
              <Badge variant="outline">Featured</Badge>
            )}
          </div>
          
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            {project.frontmatter.title}
          </h1>
          
          <p className="text-lg text-muted-foreground">
            {project.frontmatter.description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(project.frontmatter.date)}
            </div>
            <div>{project.readingTime.text}</div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.frontmatter.links?.demo && (
              <Button asChild>
                <Link href={project.frontmatter.links.demo} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Demo
                </Link>
              </Button>
            )}
            {project.frontmatter.links?.repo && (
              <Button variant="outline" asChild>
                <Link href={project.frontmatter.links.repo} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
            {project.frontmatter.links?.caseStudy && (
              <Button variant="outline" asChild>
                <Link href={project.frontmatter.links.caseStudy}>
                  Read Case Study
                </Link>
              </Button>
            )}
          </div>
        </div>
        
        {/* Tech Stack */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.frontmatter.tech.map((tech: string) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Project Content */}
        <div className="mt-8 prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote source={project.content} components={useMDXComponents({})} />
        </div>
        
        {/* Tags */}
        {project.frontmatter.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t">
            <h3 className="font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.frontmatter.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
