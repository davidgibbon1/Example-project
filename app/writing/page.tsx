import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getPosts } from "@/lib/mdx"
import { formatDate } from "@/lib/utils"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles, tutorials, and thoughts on web development, programming, and technology.",
}

export default async function Writing() {
  const posts = await getPosts()
  
  if (posts.length === 0) {
    return (
      <div className="container py-6 lg:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
              Writing
            </h1>
            <p className="text-lg text-muted-foreground">
              Articles, tutorials, and thoughts on web development, programming, and technology
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              No posts yet. Check back soon for articles and tutorials!
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container py-6 lg:py-10">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Writing
          </h1>
          <p className="text-lg text-muted-foreground">
            Articles, tutorials, and thoughts on web development, programming, and technology
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          {posts.map((post) => (
            <Card key={post.frontmatter.slug} className="group hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    <Link href={`/writing/${post.frontmatter.slug}`}>
                      {post.frontmatter.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.frontmatter.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.frontmatter.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readingTime.text}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
