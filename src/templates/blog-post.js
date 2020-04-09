import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Share from "../components/Share"
import TagList from "../components/TagList"
import { rhythm, scale } from "../utils/typography"
import { injectContentAd } from "../utils/adsense"

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { title: siteTitle, siteUrl } = this.props.data.site.siteMetadata
    const { previous, next, slug } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Helmet>
          <link rel="canonical" href={`${siteUrl}blog${slug}`} />
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date} <TagList tags={post.frontmatter.tags} />
        </p>
        <div dangerouslySetInnerHTML={{ __html: injectContentAd(post.html) }} />
        <p>
          <Share url={`${siteUrl}blog${slug}`} title={post.frontmatter.title} />
        </p>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
