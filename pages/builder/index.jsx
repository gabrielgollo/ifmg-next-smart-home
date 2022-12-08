import React from 'react'
import BuilderFlow from '@/components/HousePlant/BuilderFlow'
import BuilderFlowProvider from '@/components/HousePlant/context/builderflow'
import ArticleLayout from '@/layout/article'

function Builder () {
  return (
    <ArticleLayout>
        <h1>Builder</h1>
        <BuilderFlowProvider>
          <BuilderFlow></BuilderFlow>
        </BuilderFlowProvider>
    </ArticleLayout>
  )
}

export default Builder
