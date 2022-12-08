import React from 'react'
import PropTypes from 'prop-types'

export const BuilderFlowContext = React.createContext()

export function BuilderFlowProvider ({ children }) {
  const [isDragging, setIsDragging] = React.useState(false)
  const [components, setComponents] = React.useState([])
  const [selectedComponent, setSelectedComponent] = React.useState(null)

  function updateNodeById (id, params) {
    const newComponents = components.map(component => {
      if (component.id === id) {
        return {
          ...component,
          ...params
        }
      }
      return component
    })
    setComponents(newComponents)
  }

  return (
        <BuilderFlowContext.Provider value={{
          isDragging,
          setIsDragging,
          components,
          setComponents,
          selectedComponent,
          setSelectedComponent,
          updateNodeById
        }}>
            {children}
        </BuilderFlowContext.Provider>
  )
}

BuilderFlowProvider.propTypes = {
  children: PropTypes.node
}

export default BuilderFlowProvider
