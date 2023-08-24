import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const TagList = ({ tags }) => (
  <>
    {tags.map((tag) => (
      <Link
        to={`/blog/tags/${tag}`}
        key={tag}
        style={{ marginRight: rhythm(0.25) }}
      >
        #{tag}
      </Link>
    ))}
  </>
)

export default TagList
