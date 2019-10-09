import gray from "gray-percentage"
import Typography from "typography"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

const theme = {
  baseFontSize: "16px",
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  googleFonts: [
    {
      name: "Noto Sans TC",
      styles: ["400", "400i", "600", "600i"],
    },
  ],
  headerFontFamily: ["Noto Sans TC", "serif"],
  bodyFontFamily: ["Noto Sans TC", "serif"],
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    ul: {
      listStyle: "disc",
    },
    "ul,ol": {
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      "ul,ol": {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(2),
    },
    a: {
      color: "#007acc",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      boxShadow: "none",
      textDecoration: "underline",
    },
    code: {
      background: "rgba(27,31,35,.05)",
      padding: ".2em .4em",
      borderRadius: "3px",
    },
  }),
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
