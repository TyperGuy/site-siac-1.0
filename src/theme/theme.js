// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  colors:{
    primary:"#0d7abd",
    secondary:"#FDC900",
    tertiary:"#FE0000"
  }
 
})

export default theme;
