import { createFormHookContexts } from '@tanstack/react-form'
import { Checkbox, PasswordInput, TextInput } from '@mantine/core'

import { createFormHook } from './create-form-hook'

export const { fieldContext, formContext, useFieldContext }
  = createFormHookContexts()

export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextInput,
    PasswordInput,
    Checkbox,
  },
  formComponents: {
    TextInput,
    PasswordInput,
    Checkbox,
  },
})
