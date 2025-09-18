import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

function CustomLink(props: React.ComponentProps<typeof Link>) {
  const href = props.href
  const hrefString = typeof href === 'string' ? href : ''
  
  if (hrefString.startsWith('/')) {
    return <Link {...props} />
  }
  
  if (hrefString.startsWith('#')) {
    return <a {...props} href={hrefString} />
  }
  
  return <a target="_blank" rel="noopener noreferrer" {...props} href={hrefString} />
}

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} />
}

function Callout({ children, type = 'default' }: { children: React.ReactNode; type?: 'default' | 'warning' | 'error' }) {
  return (
    <Card className={`my-6 ${
      type === 'warning' ? 'border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950' :
      type === 'error' ? 'border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950' :
      'border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950'
    }`}>
      <CardContent className="pt-6">
        {children}
      </CardContent>
    </Card>
  )
}

function TechStack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant="secondary">
          {item}
        </Badge>
      ))}
    </div>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="mt-2">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        {children}
      </blockquote>
    ),
    img: RoundedImage,
    a: CustomLink,
    code: ({ children }) => (
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4">
        {children}
      </pre>
    ),
    // Custom components
    Callout,
    TechStack,
    ...components,
  }
}
