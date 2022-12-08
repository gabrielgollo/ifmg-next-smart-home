import { Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Box, Container, Flex } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { SunIcon, HamburgerIcon, MoonIcon } from '@chakra-ui/icons'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { Icon } from '@iconify/react'
import colors from '../../../styles/colors'

export const NavigationBar = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Box
      position="fixed"
      as="nav"
      bgColor={useColorModeValue(colors.light.navigationBar, colors.dark.navigationBar)}
      color={useColorModeValue(colors.light.text, colors.dark.text)}
      w="100%"
      zIndex={1}
    >
      <Container
        display="flex"
        maxW="container.sm"
        p={2}
        wrap="wrap"
        align="center"
        justify="space-around"
      >
        <Flex align="center" mr={5} style={{ fontWeight: 500 }}>
            <Link href="/" display="inline-flex" alignItems="center">
               <Icon icon='fa6-solid:house-signal' fontSize={24} />
               Smart Home
            </Link>
        </Flex>
        <Box flex={1} align="left" display={{ base: 'none', sm: 'flex' }}>

          <Flex align="center" mr={5} style={{ fontWeight: 500 }}>
              <Link href='/' display='inline-flex' alignItems='center'>Home</Link>
          </Flex>

          <Flex align="center" mr={5} style={{ fontWeight: 500 }}>
              <Link href='/builder' display='inline-flex' alignItems='center'>Builder</Link>
          </Flex>

          <Flex align="center" mr={5} style={{ fontWeight: 500 }}>
              <Link href='/dashboard.html' display='inline-flex' alignItems='center'>DASHBOARD</Link>
          </Flex>
        </Box>

        <Box flex={1} align="right">
          <IconButton
            width="40px"
            onClick={toggleColorMode}
            variant='outline'
            colorScheme={
              colorMode === 'dark'
                ? 'yellow'
                : 'blackAlpha'
            }>
              {
                colorMode === 'dark'
                  ? <SunIcon />
                  : <MoonIcon />
              }
            </IconButton>

        <Box ml={2} display={{ base: 'inline-block', sm: 'none' }}>
            <Menu isLazy={true} id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList fontWeight={500}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/builder" passHref>
                  <MenuItem as={Link}>Builder</MenuItem>
                </NextLink>
                <NextLink href="/dashboard.html">
                  <MenuItem as={Link}>DASHBOARD</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
