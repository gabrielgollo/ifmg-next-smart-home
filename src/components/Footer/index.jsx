import { Box, useColorModeValue } from '@chakra-ui/react'
import colors from '../../../styles/colors'

const Footer = () => {
  return (
    <Box align="center" opacity={0.7} fontSize="sm" color={useColorModeValue(colors.light.text, colors.dark.text)}>
      &copy; {new Date().getFullYear()} Gabriel Santos Gollo do Amaral. All Rights Reserved.
    </Box>
  )
}

export default Footer
