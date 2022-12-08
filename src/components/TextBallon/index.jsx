import { Box, useColorModeValue } from '@chakra-ui/react'
import colors from '@/styles/colors'
import PropTypes from 'prop-types'
export default function TextBallon ({ text }) {
  return (
        <Box
          borderradius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue(colors.light.contrastBg, colors.dark.contrastBg)}
          color={useColorModeValue(colors.light.text, colors.dark.text)}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          {text}
        </Box>
  )
}

TextBallon.propTypes = {
  text: PropTypes.string.isRequired
}
