import React from "react"
import sidebars from "../../../../docs/sidebars"
import { NavComp } from "../../bootstrap.components"
import { useStaticQuery, graphql } from "gatsby"
import sidebar from "./sidebar.module.scss"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import arrow from "../../../images/press/carousel/next.png"

export default ({ active }) => {
  // we need to get the titles from the Mdx nodes
  const data = useStaticQuery(graphql`
    query DocsQuery {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  // create a map from slug to title
  const titles = data.allMdx.edges.reduce((map, { node }) => {
    map[node.fields.slug] = node.frontmatter.title
    return map
  }, {})

  const manageItem = (id, event) => {
    let item = document.getElementById(id)

    if (item.style.overflow === "visible") {
      item.style.overflow = ""
      item.style.maxHeight = ""
      event.stopPropagation()
      return
    }

    item.style.overflow = "visible"
    item.style.maxHeight = "100%"
    event.stopPropagation()
  }

  // generate item key for the recursive menu build
  let lastId = 0
  const generateKey = (prefix = "id") => {
    lastId++
    return `${prefix}${lastId}`
  }

  // recursively build the menu
  const links = items =>
    items.map(item => {
      let key = generateKey()

      if (typeof item === "string") {
        const href = `/docs/${item}/`
        return (
          <li className={[sidebar.item].join(" ")}>
            <a className={[sidebar.link].join(" ")} href={href} key={key}>
              {titles[href]}
            </a>
          </li>
        )
      }

      return (
        <li
          className={sidebar.itemSubmenu}
          key={key}
          id={key}
          className={[sidebar.submenu].join(" ")}
          onClick={e => manageItem(key, e)}
        >
          {" "}
          <a className={sidebar.hideSubmenu}>
            <div className={sidebar.item}>
              {item.label}
              <i class={["arrow right", sidebar.arrowMenu].join(" ")}></i>
            </div>
          </a>
          <ul className={sidebar.itemDropdawn}>{links(item.items)}</ul>
        </li>
      )
    })

  return (
    <div>
      {sidebars && sidebars.docs && (
        <div className={["nav flex-column", sidebar.menu].join(" ")}>
          {links(sidebars.docs)}
        </div>
      )}
    </div>
  )
}
