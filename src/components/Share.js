import React from "react"

import Button from "./Button"

const Share = ({ title, url }) => {
  if (!navigator.share) {
    return null
  }
  const hanldeClick = () => {
    navigator.share({ title, url })
  }
  return (
    <Button onClick={hanldeClick} fullWidth>
      Share
    </Button>
  )
}

export default Share
