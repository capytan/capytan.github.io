export type SiteConfig = {
  name: string
  title: string
  description: string
  url: string
  ogImage: string
  profile: {
    name: string
    description: string
    image: string
  }
  links: {
    twitter: string
    github: string
    blog: string
  }
  analytics: {
    googleAnalyticsId: string | undefined
  }
}

export type Profile = {
  name: string
  description: string
  image: string
}

export type Link = {
  title: string
  url: string
  icon: string
  description?: string
} 