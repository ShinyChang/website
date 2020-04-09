import React, { useEffect, useState } from "react"

import Button from "./Button"

const Share = ({ title, url }) => {
  const [isSupportShare, setIsSupportShare] = useState(true)
  const hanldeClick = () => {
    window.navigator.share({ title, url })
  }
  useEffect(() => {
    if (!window.navigator.share) {
      setIsSupportShare(false)
    }
  })
  return isSupportShare ? (
    <Button onClick={hanldeClick} fullWidth>
      Share
    </Button>
  ) : null
}

export default Share
