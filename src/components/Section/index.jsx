import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { chakra, shouldForwardProp } from '@chakra-ui/react'

const CustomDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === 'transition'
})

export default function Section ({ children, delay }) {
  return (
    <CustomDiv
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        mb={6}
        transition={{ delay, duration: 0.5 }}
    >
        {children}
    </CustomDiv>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number
}
