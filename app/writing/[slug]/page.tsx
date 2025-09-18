import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getPost, getPosts } from "@/lib/mdx"
import { formatDate } from "@/lib/utils"
import { MDXRemote } from "next-mdx-remote/rsc"
import { useMDXComponents } from "@/components/mdx-components"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  
  return posts.map((post) => ({
    slug: post.frontmatter.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {}
  }
  
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="container py-6 lg:py-10">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/writing">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Writing
          </Link>
        </Button>
        
        {/* Post Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            {post.frontmatter.title}
          </h1>
          
          <p className="text-lg text-muted-foreground">
            {post.frontmatter.description}
          </p>
          
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
          
          {/* Tags */}
          {post.frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
        
        {/* Post Content */}
        <div className="mt-8 prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote source={post.content} components={useMDXComponents({})} />
        </div>
        
        {/* Footer */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/writing">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Writing
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              Found this helpful? <Link href="/contact" className="underline">Let me know!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
