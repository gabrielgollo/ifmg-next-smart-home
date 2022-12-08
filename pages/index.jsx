import { Box, Stack, useColorModeValue, Text } from '@chakra-ui/react'
import React from 'react'
import ArticleLayout from '@/layout/article'
import Section from '@/components/Section'
import TextBallon from '@/components/TextBallon'
import colors from '@/styles/colors'
import { LedComponent } from '@/components/Eletronics'

export default function HomePageApp () {
  return (
    <React.Fragment>
      <ArticleLayout>
        <TextBallon text="Start designing your home automations" />
      </ArticleLayout>

      <ArticleLayout enableContainer={true}>
        <Section delay={0.1}>
        </Section>
        <Box
          title="page-content"
          color={useColorModeValue(colors.light.text, colors.dark.text)}
        >

          {/* <Heading as="h1" size="2xl" textAlign="center">
            Welcome to my website!
          </Heading> */}

          <Section delay={0.5}>
            <Text as="h6" variant="subtle">
              Press some led to see the magic!
            </Text>

            <Stack direction={'row'}>
              <LedComponent
                component={{ data: { color: '#FF1313', isOn: true } }}
              />
              <LedComponent
                component={{ data: { color: '#41de16', isOn: false } }}
              />
            </Stack>

          </Section>
        </Box>

        <Section delay={0.5}>
        </Section>
      </ArticleLayout>
    </React.Fragment>
  )
}
