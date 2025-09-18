// import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about David Gibbon - software developer, writer, and technology enthusiast.",
}

export default function About() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground">
            A bit more about who I am and what I do
          </p>
        </div>
        
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                I'm a passionate software developer with a love for creating beautiful, 
                functional applications that solve real-world problems. My journey in 
                technology started several years ago, and I've been constantly learning 
                and evolving ever since.
              </p>
              
              <p>
                I specialize in modern web technologies, with expertise in JavaScript, 
                TypeScript, React, Next.js, and various backend technologies. I believe 
                in writing clean, maintainable code and following best practices to 
                create scalable solutions.
              </p>
              
              <h2>What I Do</h2>
              <p>
                Currently, I focus on full-stack web development, building everything 
                from responsive user interfaces to robust backend systems. I enjoy 
                working with modern frameworks and tools that enable rapid development 
                without compromising on quality.
              </p>
              
              <h2>Beyond Code</h2>
              <p>
                When I'm not coding, I enjoy sharing my knowledge through writing and 
                contributing to open-source projects. I believe in the power of 
                community and continuous learning, which is why I regularly write 
                about development topics and explore new technologies.
              </p>
              
              <p>
                I'm also passionate about design and user experience, always striving 
                to create interfaces that are not only functional but also intuitive 
                and delightful to use.
              </p>
              
              <h2>Let's Connect</h2>
              <p>
                I'm always interested in connecting with fellow developers, designers, 
                and anyone passionate about technology. Feel free to reach out if you'd 
                like to collaborate on a project, discuss ideas, or just have a chat 
                about the latest in tech.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <div className="flex h-full items-center justify-center bg-muted">
                <p className="text-muted-foreground">Profile Photo</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Facts</h3>
              <ul className="space-y-2 text-sm">
                <li>📍 Based in [Your Location]</li>
                <li>💼 Full-Stack Developer</li>
                <li>🎓 [Your Education/Background]</li>
                <li>☕ Coffee enthusiast</li>
                <li>🌱 Always learning something new</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Current Focus</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Building modern web applications</li>
                <li>• Exploring AI and machine learning</li>
                <li>• Contributing to open source</li>
                <li>• Writing technical content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
