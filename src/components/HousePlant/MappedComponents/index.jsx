import React from 'react'
import { LedComponent } from '../../Eletronics'
import { Room } from '../HouseComponents'

const MappedComponents = {
  room: ({ component }) => <Room component={component}></Room>,
  led: ({ component }) => <LedComponent component={component} />
}

export default MappedComponents
