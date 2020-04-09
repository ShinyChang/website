import React, { useEffect, useState } from "react"

import Button from "./button"

const Share = ({ title, url }) => {
  const [isSupportShare, setIsSupportShare] = useState(true)
  const hanldeClick = () => {
    window.navigator.share({ title, url })
  }
  useEffect(() => {
    if (!window.navigator.share) {
      setIsSupportShare(false)
    }
  }, [setIsSupportShare])
  return isSupportShare ? (
    <Button onClick={hanldeClick} fullWidth>
      Share
    </Button>
  ) : null
}

export default Share
