import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import colors from './colors'
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const styles = {
  global: props => ({
    body: {
      bg: mode(colors.light.bg, colors.dark.bg)(props) // Body Background Color
    }
  })
}

const theme = extendTheme({ config, styles })
export default theme

export { theme }
