const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        fields: Fields
        html: String
    }



    type Fields {
      slug: String
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

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  store,
  cache,
  createNodeId,
}) => {
  const { createNodeField, createNode } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const pathValue = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: pathValue,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { contentType: { eq: "blog" } } }
      ) {
        edges {
          node {
            frontmatter {
              blogTitle
              blogFeaturedImage
              blogDate
              contentType
              templateKey
            }
            html
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.log(e.toString()))

        return Promise.reject(result.errors)
      }

      const blogPosts = result.data.allMarkdownRemark.edges

      blogPosts.forEach(edge => {
        if (edge.node.frontmatter.templateKey === "ignore") {
          return
        } else {
          const id = edge.node.id
          const templateKey = edge.node.frontmatter.templateKey
          const contentType = edge.node.frontmatter.contentType
          const title = edge.node.frontmatter.blogTitle
          const date = edge.node.frontmatter.blogDate
          const featuredImage = edge.node.frontmatter.blogFeaturedImage
          const html = edge.node.html
          const slug = edge.node.fields.slug

          createPage({
            path: slug,
            component: path.resolve(`src/templates/${String(templateKey)}.tsx`),
            context: {
              id,
              templateKey,
              contentType,
              title,
              date,
              featuredImage,
              html,
              slug,
            },
          })
        }
      })
    })
    .catch(error => {
      console.log("@@@@@@@@@@@@@" + error)
    })
}
