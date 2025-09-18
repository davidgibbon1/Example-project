import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

// This file should only be imported in server-side code
// It uses Node.js APIs that are not available in the browser

const contentDirectory = path.join(process.cwd(), "content")

export interface ProjectFrontmatter {
  title: string
  slug: string
  description: string
  status: "draft" | "wip" | "shipped"
  tech: string[]
  tags: string[]
  featured: boolean
  links?: {
    demo?: string
    repo?: string
    caseStudy?: string
  }
  cover?: {
    src: string
    alt: string
  }
  date: string
}

export interface PostFrontmatter {
  title: string
  slug: string
  description: string
  tags: string[]
  date: string
  published?: boolean
}

export interface UsesFrontmatter {
  sections: {
    title: string
    items: {
      name: string
      note?: string
      link?: string
    }[]
  }[]
}

export interface MDXContent {
  frontmatter: ProjectFrontmatter | PostFrontmatter
  content: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

export async function getProjects(): Promise<(MDXContent & { frontmatter: ProjectFrontmatter })[]> {
  const projectsPath = path.join(contentDirectory, "projects")
  
  if (!fs.existsSync(projectsPath)) {
    return []
  }

  const files = fs.readdirSync(projectsPath)
  const projects = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(projectsPath, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)
      
      return {
        frontmatter: data as ProjectFrontmatter,
        content,
        readingTime: readingTime(content),
      }
    })
    .filter((project) => project.frontmatter.status !== "draft")
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

  return projects
}

export async function getProject(slug: string): Promise<(MDXContent & { frontmatter: ProjectFrontmatter }) | null> {
  try {
    const filePath = path.join(contentDirectory, "projects", `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)
    
    return {
      frontmatter: data as ProjectFrontmatter,
      content,
      readingTime: readingTime(content),
    }
  } catch {
    return null
  }
}

export async function getPosts(): Promise<(MDXContent & { frontmatter: PostFrontmatter })[]> {
  const writingPath = path.join(contentDirectory, "writing")
  
  if (!fs.existsSync(writingPath)) {
    return []
  }

  const files = fs.readdirSync(writingPath)
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(writingPath, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)
      
      return {
        frontmatter: data as PostFrontmatter,
        content,
        readingTime: readingTime(content),
      }
    })
    .filter((post) => post.frontmatter.published !== false)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

  return posts
}

export async function getPost(slug: string): Promise<(MDXContent & { frontmatter: PostFrontmatter }) | null> {
  try {
    const filePath = path.join(contentDirectory, "writing", `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)
    
    return {
      frontmatter: data as PostFrontmatter,
      content,
      readingTime: readingTime(content),
    }
  } catch {
    return null
  }
}

export async function getUses(): Promise<UsesFrontmatter | null> {
  try {
    const filePath = path.join(contentDirectory, "uses", "index.mdx")
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContent)
    
    return data as UsesFrontmatter
  } catch {
    return null
  }
}
