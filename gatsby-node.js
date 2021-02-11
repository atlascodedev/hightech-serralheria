exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        
    }


    type Frontmatter @infer {
        templateKey: String
        contentType: String
        title: String
        featuredImage: String
        body: String
        description: String
        blogTitle: String
        blogDate: String
        blogFeaturedImage: String
        blogPost: String


        phoneOne: String
        phoneTwo: String
        mailOne: String
        mailTwo: String
        instagramUrl: String
        facebookUrl: String
        whatsAppNum: String
        whatsAppMessage: String
        address: String


        portfolioItemPicture: String
        
    }
  
  `

  createTypes(typeDefs)
}
