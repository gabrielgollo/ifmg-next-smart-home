import { useColorModeValue, Text, Box } from '@chakra-ui/react'
import React from 'react'
import colors from '../../../../styles/colors'
import PropTypes from 'prop-types'
import { Rnd } from 'react-rnd'
import MappedComponents from '../MappedComponents'

function Room ({ component }) {
  const { width = 10, height = 10, x = 0, y = 0, name = 'Room', data = { components: [] } } = component
  return (
      <div
        style={{
          margin: '1 auto',
          width,
          height,
          border: 4,
          borderColor: useColorModeValue(colors.light.text, colors.dark.text),
          borderStyle: 'solid',
          backgroundColor: useColorModeValue(colors.light.contrastBg, colors.dark.contrastBg),
          zIndex: 0
        }}
        >
          <Text align={'center'}>
            {name}
          </Text>
          <Box>
            {data.components.map((childComponent, index) => {
              const { id, type, name, x, y, width, height, data } = childComponent
              const Component = MappedComponents[type]

              return (
                <Rnd
                    key={index}
                    default={{
                      x,
                      y,
                      width,
                      height
                    }}
                    bounds="parent"
                >
                    <Component component={childComponent}></Component>
                </Rnd>
              )
            })}
          </Box>
        </div>
  )
}

Room.propTypes = {
  component: PropTypes.object
}

export default Room
