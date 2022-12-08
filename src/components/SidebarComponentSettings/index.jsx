import React from 'react'
import PropTypes from 'prop-types'
import { FormProvider, useForm } from 'react-hook-form'

import { LedSettings } from '../Eletronics/led'
import { Button } from '@chakra-ui/react'
import { useBuilderFlow } from '../HousePlant/hooks/useBuilderFlow'
const MappedComponentSettings = {
  led: LedSettings
}

export function SideBarComponentSettings ({ id, type, data }) {
  const { updateNodeById } = useBuilderFlow()
  const methods = useForm({
    mode: 'all',
    defaultValues: data
  })

  const onSubmit = (paramsToUpdate) => {
    console.log('submiting: ', paramsToUpdate)
    updateNodeById(id, { data: paramsToUpdate })
  }

  const ComponentSetting = MappedComponentSettings[type]
  if (!ComponentSetting) return <div></div>

  return (
  <React.Fragment>
    <FormProvider {...methods}>
        <form className="sidebar-component-settings" onSubmit={methods.handleSubmit(onSubmit)} onChange={methods.handleSubmit(onSubmit)}>
          {ComponentSetting && (
            <ComponentSetting id={id} data={data} />
          )}

          <Button type="submit">Save</Button>
        </form>
    </FormProvider>
    </React.Fragment>
  )
}

SideBarComponentSettings.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}
