import { useContext } from 'react'

import { BuilderFlowContext } from '../context/builderflow'

export const useBuilderFlow = () => {
  const context = useContext(BuilderFlowContext)
  return context
}
