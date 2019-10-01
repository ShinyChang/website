import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogTags = ({ location, pageContext, data }) => {
  const { tag } = pageContext
  const { title: siteTitle, siteUrl } = data.site.siteMetadata
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet>
        <link rel="canonical" href={`${siteUrl}blog/tags${tag}`} />
      </Helmet>
      <h1>{tagHeader}</h1>
      <ol>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={`/blog${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ol>
      <Link to="/blog/tags">All tags</Link>
    </Layout>
  )
}

BlogTags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default BlogTags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
`
