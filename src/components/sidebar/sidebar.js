import React from "react"
import sidebars from "../../../docs/sidebars";
import { NavComp } from "../bootstrap.components";
import { useStaticQuery, graphql } from "gatsby"

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
    `);
    
    // create a map from slug to title
    const titles = data.allMdx.edges.reduce((map, { node }) => {
        map[node.fields.slug] = node.frontmatter.title;
        return map;
    }, {});

    // recursively build the menu
    const links = (items) => items.map(item => {
        if (typeof item === "string") {
            const href = `/docs/${item}/`
            return (
                <NavComp.Link href={href} active={href == active}>
                    {titles[href]}
                </NavComp.Link>
            )
        } else if (item && item.type === "category") {
            return (
                <NavComp.Item>
                    {item.label}
                    {links(item.items)}
                </NavComp.Item>
            );
        }
    });
    return (
        <div>
            {sidebars && sidebars.docs &&
            <NavComp className="flex-column">
                {links(sidebars.docs)}
            </NavComp>
            }
        </div>
    );
}
