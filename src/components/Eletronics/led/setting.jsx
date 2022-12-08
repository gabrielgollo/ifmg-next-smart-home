import React from 'react'
import { SketchPicker } from 'react-color'
import PropTypes from 'prop-types'
import { Input } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import { useBuilderFlow } from '@/components/HousePlant/hooks/useBuilderFlow'

function LedSettings ({ id, data }) {
  const { updateNodeById } = useBuilderFlow()
  const { register } = useFormContext()
  const { color = '#FFFFFF' } = data

  const colorInput = register('color')
  const handleColorChange = (e) => {
    colorInput.onChange({ target: { name: 'color', value: e.hex } })
    updateNodeById(id, { data: { color: e.hex } })
  }

  return (
      <React.Fragment>
        <p>Change the led color</p>
        <SketchPicker
            color={color}
            onChange={handleColorChange}
        />
        <Input name='mqttTopic' placeholder='mqtt topic'></Input>
        <Input name='identifier' placeholder='identifier'></Input>
      </React.Fragment>
  )
}

LedSettings.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  control: PropTypes.object,
  register: PropTypes.func
}

export default LedSettings
