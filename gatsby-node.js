const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const sidebars = require("./docs/sidebars")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "docs" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/docs${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions

  // query all Mdx nodes
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // load menu
  function nodeItems (node) {
    if (typeof node === "string") {
      console.log(node);
      return node;
    } else if (node && node.items) {
      return node.items.map(nodeItems);
    }
  };
  console.log(sidebars.docs);
  const items = nodeItems(sidebars.docs);
  console.log(items);
  
  // Create doc pages.
  const docs = result.data.allMdx.edges

  // you'll call `createPage` for each result
  docs.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/docs-page-layout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
    reporter.success(`Page created for ${node.fields.slug}`)
  })
}
