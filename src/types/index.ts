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

export type ServiceItemList = {
  serviceList: Array<ServiceItem>
}

export interface ServiceGraphQuery {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        frontmatter: {
          title: string
          description: string
          contentType: string
          featuredImage: string
        }
      }
    }>
  }
}
