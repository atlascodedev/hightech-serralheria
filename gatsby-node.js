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


        phoneOne: String
        phoneTwo: String
        mailOne: String
        mailTwo: String
        instagramURL: String
        facebookURL: String
        whatsAppNum: String
        whatsAppMessage: String
        address: String
        
    }
  
  `

  createTypes(typeDefs)
}
