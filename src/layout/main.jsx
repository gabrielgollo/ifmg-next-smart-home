import { Box, Container } from '@chakra-ui/layout'
import Head from 'next/head'
import Footer from '@/components/Footer'
import { NavigationBar } from '@/components/NavigationBar'
import Section from '@/components/Section'

export default function Layout ({ children }) {
  return (
    <Box as="main" pb="8">
      <NavigationBar />
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <Container pt={14} maxW="container.xl" centerContent>
        <Section delay={0.3}>
          {children}
        </Section>
        <Footer />
      </Container>
    </Box>
  )
}
