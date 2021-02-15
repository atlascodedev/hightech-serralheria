export interface PortfolioItem {
  portfolioItemPicture: string
}

export type PortfolioItemList = {
  portfolioList: Array<PortfolioItem>
}

export interface ServiceItem {
  serviceItemPicture: string
  serviceItemDescription: string
  serviceItemTitle: string
}

export interface BlogPost {
  blogTitle: string
  blogDate: string
  blogFeaturedImage: string
  html: string
  blogURL: string
  readingTime: string
}

export type BlogPostList = {
  blogPosts: Array<BlogPost>
}

export type ServiceItemList = {
  serviceList: Array<ServiceItem>
}

export type MenuItem = {
  menuName: string | null
  reference: React.RefObject<any> | null
  itemDocumentId: string | null
  sectionComponent?: any
  childComponent?: any
}

export interface ServiceGraphQuery {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        frontmatter: {
          // Service fields
          title: string
          description: string
          contentType: string
          featuredImage: string

          // Blog fields
          blogTitle: string
          blogDate: string
          blogFeaturedImage: string

          // Portfolio
          portfolioItemPicture: string
        }
        html: string
        fields: {
          slug: string
        }
      }
    }>
  }
}
