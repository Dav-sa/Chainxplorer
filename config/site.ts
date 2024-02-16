import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Airfrance",
  description: "A blockchain explorer built with Next",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/_Dav___",
    github: "https://github.com/Dav-sa/Chainxplorer",
    docs: "https://ui.shadcn.com",
  },
}
