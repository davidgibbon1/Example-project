"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { ProjectFrontmatter } from "@/lib/mdx"

interface ProjectsClientProps {
  projects: Array<{
    frontmatter: ProjectFrontmatter
    content: string
    readingTime: {
      text: string
      minutes: number
      time: number
      words: number
    }
  }>
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  
  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach(project => {
      project.frontmatter.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [projects])
  
  // Filter projects by selected tag
  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projects
    return projects.filter(project => 
      project.frontmatter.tags.includes(selectedTag)
    )
  }, [projects, selectedTag])
  
  return (
    <div className="container py-6 lg:py-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground">
          A collection of things I've built
        </p>
      </div>
      
      {/* Tag Filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        <Button
          variant={selectedTag === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedTag(null)}
        >
          All
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.frontmatter.slug} className="group hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link href={`/projects/${project.frontmatter.slug}`}>
                      {project.frontmatter.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      project.frontmatter.status === 'shipped' ? 'default' :
                      project.frontmatter.status === 'wip' ? 'secondary' : 'outline'
                    } className="text-xs">
                      {project.frontmatter.status}
                    </Badge>
                    {project.frontmatter.featured && (
                      <Badge variant="outline" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
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
                {project.frontmatter.tech.map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">No projects found with the selected tag.</p>
        </div>
      )}
    </div>
  )
}
