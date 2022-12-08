import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/layout/main'
import theme from '@/styles/theme'
import PropTypes from 'prop-types'
function WebConfig ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

WebConfig.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default WebConfig
