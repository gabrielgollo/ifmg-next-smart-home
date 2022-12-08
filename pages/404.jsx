import { Container, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import ArticleLayout from '@/layout/article'

const paragraphStyle = {
  marginTop: '5px',
  textAlign: 'justify',
  textIndent: '2em'
}

export default function PageNotFound (params) {
  return (
    <ArticleLayout>
        <Container
            marginTop={0}
            maxW="30em"
            centerContent
        >
            <Img src="/404.png"></Img>
            <Heading as="h4">
                This page isn&apos;t available
            </Heading>
            <Text style={paragraphStyle}>
                The link you followed may be broken, or the page may have been removed.
            </Text>
        </Container>
    </ArticleLayout>
  )
}
