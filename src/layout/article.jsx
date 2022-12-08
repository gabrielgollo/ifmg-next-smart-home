import { Container, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import colors from '../../styles/colors'

export default function ArticleLayout ({ children, enableContainer = false }) {
  return (
    <Container
      marginTop={10}
      maxW="30em"
      centerContent
      backgroundColor={
        enableContainer
          ? useColorModeValue(colors.light.contrastBg, colors.dark.contrastBg)
          : undefined
      }
      color={useColorModeValue(colors.light.text, colors.dark.text)}
    >
      {children}
    </Container>
  )
}

ArticleLayout.propTypes = {
  children: PropTypes.node,
  enableContainer: PropTypes.bool
}
