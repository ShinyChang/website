const adSensePlaceholder = `<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-1721860710174593" data-ad-slot="4881972037"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`

export const injectContentAd = content => {
  let count = 0
  return content.replace(/<\/p>/g, (match, offset) => {
    count++
    if (count === 3 || count % 7 === 0) {
      return `${match}${adSensePlaceholder}`
    }
    return match
  })
}
