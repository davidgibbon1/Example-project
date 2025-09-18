import { getProjects } from "@/lib/mdx"
import { ProjectsClient } from "@/components/projects-client"

export default async function Projects() {
  const projects = await getProjects()
  
  return <ProjectsClient projects={projects} />
}
