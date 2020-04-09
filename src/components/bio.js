/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Experienced JavaScript / Node.js engineer & team lead.
              <br />
              <a href={`https://facebook.com/${social.facebook}`}>
                Facebook
              </a>{" "}
              <a href={`https://medium.com/${social.medium}`}>Medium</a>{" "}
              <a href={`https://www.linkedin.com/in/${social.linkedIn}`}>
                LinkedIn
              </a>{" "}
              <a href={`https://codesandbox.io/u/${social.codeSandbox}`}>
                CodeSandbox
              </a>{" "}
              <a href={`https://github.com/${social.github}`}>GitHub</a>{" "}
              <a href={`mailto://${social.email}`}>Email</a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          facebook
          medium
          codeSandbox
          linkedIn
          github
          email
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
