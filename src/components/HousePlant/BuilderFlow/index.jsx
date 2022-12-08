/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Rnd } from 'react-rnd'
import { Button, Stack } from '@chakra-ui/react'
import MappedComponents from '../MappedComponents'

import { v4 as uuidv4 } from 'uuid'
import BuilderSideBar from '../../Sidebar'
import { useBuilderFlow } from '../hooks/useBuilderFlow'

function BuilderFlow () {
  const { setIsDragging, components, setComponents, selectedComponent, setSelectedComponent, updateNodeById } = useBuilderFlow()

  const addComponent = (component) => {
    setComponents([...components, component])
  }

  const setSelectedComponentHook = (component) => {
    console.log(component)
    setSelectedComponent(component)
  }

  const clearSelectedComponentHook = () => {
    // console.log('clearing selected')
    setSelectedComponent(null)
  }

  const handleDragStart = (e, d) => {
    setIsDragging(true)
  }

  const handleDragging = (e, d) => {
    console.log(e)
  }

  const nodeViewArea = 10

  const isPointInsideNode = (x, y, node) => {
    const { x: nodeX, y: nodeY, width, height } = node
    const xInside = x >= nodeX - nodeViewArea && x <= nodeX + width + nodeViewArea
    const yInside = y >= nodeY - nodeViewArea && y <= nodeY + height + nodeViewArea
    return xInside && yInside
  }

  const hasNodeCollision = (refNode, node) => {
    const { x: xa1, y: ya1, width: width1, height: height1 } = refNode
    const xa2 = xa1 + width1
    const ya2 = ya1 + height1

    const leftUp = isPointInsideNode(xa1, ya1, node)
    if (leftUp) {
      return { x: xa1, y: ya1 }
    }
    const rightUp = isPointInsideNode(xa2, ya1, node)
    if (rightUp) {
      return { x: xa2, y: ya1 }
    }
    const leftDown = isPointInsideNode(xa1, ya2, node)
    if (leftDown) {
      return { x: xa1, y: ya2 }
    }
    const rightDown = isPointInsideNode(xa2, ya2, node)
    if (rightDown) {
      return { x: xa2, y: ya2 }
    }

    return false
  }

  function haveIntersection (other, main) {
    return !(
      main.x > other.x + other.width ||
      main.x + main.width < other.x ||
      main.y > other.y + other.height ||
      main.y + main.height < other.y
    )
  }

  const handleDragStop = (id, e, d) => {
    setIsDragging(false)

    const { x, y } = d
    const { width, height } = e.target.getBoundingClientRect()
    const refNode = { x, y, width, height }
    console.log(id, x, y, width, height)

    // find collision detection
    let collision = false
    const collisionNode = null
    for (const node of components) {
      if (node.id === id) continue

      const hasCollision = haveIntersection(refNode, node)
      if (hasCollision) {
        console.log('collision detected')
        collision = true
        updateNodeById(id, {
          x: 0,
          y: 0
        })
      }
    }

    if (!collision) {
      updateNodeById(id, {
        x: d.x,
        y: d.y
      })
    }
  }

  const handleResize = (id, e, direction, ref, delta, position) => {
    // console.log(id, e, direction, ref, delta, position)
    const { width, height } = ref.getBoundingClientRect()
    updateNodeById(id, {
      width,
      height
    })
  }

  useEffect(() => {
    console.log('components changed')
    console.log(components)
  }, [components])

  return (
    <div>
        <Stack direction={'row'}>
            <Button
                onClick={() => addComponent({
                  id: uuidv4(),
                  type: 'room',
                  name: 'Quarto',
                  x: 0,
                  y: 0,
                  z: 0,
                  width: 200,
                  height: 200,
                  resizable: true,
                  data: {
                    components: []
                  }
                })}
            >
                Add Room
            </Button>
            <Button
                onClick={() => addComponent({
                  id: uuidv4(),
                  type: 'led',
                  name: 'Led',
                  x: 0,
                  y: 0,
                  z: 1,
                  width: 24,
                  height: 24,
                  data: {
                    color: '#ff0000',
                    isOn: false
                  }
                })}
            >
                Add Led
            </Button>
        </Stack>
        <div
          className="box"
          style={{
            height: '70vh',
            width: '80vw',
            position: 'relative',
            overflow: 'hidden',
            padding: '0',
            zIndex: 0

          }}
          onMouseDown={clearSelectedComponentHook}
          >
            <div
              style={{
                height: '69vh',
                width: '79vw',
                padding: '10px',
                boxSizing: 'border-box',
                backgroudSize: '5px 5px',
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 99px, #ccc 99px, #ccc 100px), repeating-linear-gradient(-90deg, transparent, transparent 99px, #ccc 99px, #ccc 100px)'
              }}
              >
                {components.map((component, index) => {
                  const { id, type, resizable = false, z } = component
                  const Component = MappedComponents[type]
                  return (
                        <Rnd
                          key={id}
                          bounds="parent"
                          enableResizing={resizable}
                          onResize={handleResize.bind(this, id)}
                          onDragStart={handleDragStart}
                          onDrag={handleDragging}
                          onDragStop={(e, d) => handleDragStop(id, e, d)}
                          style={{ zIndex: z }}
                          enableUserSelectHack={true}
                        >
                          <div className="box" onClick={() => setSelectedComponentHook(component)} style={{ zIndex: z }}>
                            <Component component={component}></Component>
                          </div>
                        </Rnd>
                  )
                })}
            </div>
        </div>
            {selectedComponent?.id && <BuilderSideBar selectedComponent={selectedComponent}></BuilderSideBar>}
    </div>
  )
}

export default BuilderFlow
