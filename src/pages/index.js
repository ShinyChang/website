import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Shiny"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h3>Side Projects</h3>
        <ul>
          <li><a href="https://github.com/ShinyChang/React-Text-Truncate">react-text-truncate</a></li>
          <li><a href="https://price.shinychang.net/">price monitor</a></li>
        </ul>
        <h3>Self-hosted Services</h3>
        <ul>
          <li><a href="https://pipe.shinychang.net/">Piping Server</a></li>
        </ul>
        <Link to="/blog/">
          <Button>Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
