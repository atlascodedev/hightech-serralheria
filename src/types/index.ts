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

export interface PostItem {
  postTitle: string
  postDate: string
  postLink: string
  postReadTime: string | number
}

export type PostItemList = {
  postList: Array<PostItem>
}

export type ServiceItemList = {
  serviceList: Array<ServiceItem>
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
          body: string
        }
      }
    }>
  }
}
