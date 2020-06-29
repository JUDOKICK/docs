import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { preToCodeBlock } from "mdx-utils"
import { Link } from "gatsby"
import Code from "./code"
import Header from "./header/header"
import Footer from "./footer/footer"
import Sidebar from "./sidebar/sidebar"

const shortcodes = {
  Link,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
} // Provide common components here

export default ({ data: { self, prev, next } }) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar active={self.fields.slug} />
        <h1>{self.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{self.body}</MDXRenderer>
        </MDXProvider>
        {self.tableOfContents && self.tableOfContents.items &&
        <ul>{self.tableOfContents.items.map(item => <li><a href={item.url}>{item.title}</a></li>)}
        </ul>
        }
        {prev && <h5>Prev: <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link></h5>}
        {next && <h5>Next: <Link to={next.fields.slug}>{next.frontmatter.title}</Link></h5>}
      </div>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query DocQuery($id: String, $prev: String, $next: String) {
    self: mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
      }
      tableOfContents
    }
    prev: mdx(id: { eq: $prev }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $next }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
