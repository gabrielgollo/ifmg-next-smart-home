import { Box, Button, Divider, Input, Text, useColorModeValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import colors from '../../../styles/colors'
import { useBuilderFlow } from '../HousePlant/hooks/useBuilderFlow'
import { SideBarComponentSettings } from '../SidebarComponentSettings'

function BuilderSideBar ({ selectedComponent }) {
  const contrastBg = useColorModeValue(colors.light.contrastBg, colors.dark.contrastBg)

  const { id, type, name, x, y, z, width, height, data } = selectedComponent || {}

  const { updateNodeById } = useBuilderFlow()

  function changeName (e) {
    updateNodeById(id, { name: e.target.value })
  }

  function changeZindex (sum) {
    if (z + sum >= 0) {
      updateNodeById(id, { z: z + sum })
    }
  }

  return (
      <Box sx={{
        position: 'absolute',
        right: 0,
        top: 20,
        backgroundColor: contrastBg,
        height: '80vh',
        width: '30vw',
        minWidth: '300px',
        zIndex: 10,
        padding: '20px',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)'
      }}>
        <Box
          style={{
            marginBottom: '20px'
          }}
        >
          <Text as='h2'>Selected Component</Text>
          <Text as='h3'>name: {id} - {name}</Text>
          <Button size={'xs'} onClick={() => changeZindex(-1)}>toggle to front</Button>
          <Button size={'xs'} onClick={() => changeZindex(1)}>toggle to back</Button>
          <Input onChange={changeName} defaultValue={name}></Input>
        </Box>
        <Divider />
        <Box
          style={{
            marginTop: '5px'
          }}
        >
          <SideBarComponentSettings
            type={type}
            id={id}
            data={data}
          />
        </Box>

      </Box>
  )
}
BuilderSideBar.propTypes = {
  selectedComponent: PropTypes.object.isRequired
}

export default BuilderSideBar
