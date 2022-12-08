import React from 'react'
import PropTypes from 'prop-types'

function LedComponent ({ component }) {
  const { color = '#FFFFFF', isOn = false, newStyles = {} } = component?.data

  const r = parseInt(color.substring(1, 3), 16)
  const g = parseInt(color.substring(3, 5), 16)
  const b = parseInt(color.substring(5, 7), 16)

  const minR = r * 0.01
  const minG = g * 0.01
  const minB = b * 0.01
  const minHex =
    '#' +
    minR.toFixed().toString(16) +
    minG.toFixed().toString(16) +
    minB.toFixed().toString(16)

  const boxShadow = `rgba(0, 0, 0, 0.1) 0 -1px 7px 1px, inset ${minHex} 0 -1px 9px, rgba(${r}, ${g}, ${b}, ${
    isOn ? 1 : 0
  }) 0px 0px 12px 5px`
  return (
    <React.Fragment>
      <div
        style={{
          margin: '0 auto',
          width: '24px',
          height: '24px',
          backgroundColor: color,
          borderRadius: '50%',
          boxShadow,
          zIndex: 1000,
          WebkitAnimation: 'blinkRed 0.5s infinite',
          MozAnimation: 'blinkRed 0.5s infinite',
          msAnimation: 'blinkRed 0.5s infinite',
          OAnimation: 'blinkRed 0.5s infinite',
          animation: 'blinkRed 0.5s infinite',
          cursor: 'pointer',
          ...newStyles
        }}
      />
    </React.Fragment>
  )
}

LedComponent.propTypes = {
  component: PropTypes.object
}

export default LedComponent
