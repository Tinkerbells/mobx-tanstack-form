import { z } from 'zod'
import { makeAutoObservable } from 'mobx'

import { createMobxForm } from './mobx-tanstack-form'

export const UserFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  age: z.number().min(18),
  email: z.string().min(1),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
})

export type UserFormType = z.infer<typeof UserFormSchema>

export class Store {
  constructor() {
    makeAutoObservable(this)
  }

  userForm = createMobxForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: 18,
      email: '',
      password: '',
      confirmPassword: '',
    },
    validators: {
      onSubmit: UserFormSchema,
    },
    onSubmit: ({ value }) => {
      /* eslint-disable no-alert */
      alert(JSON.stringify(value))
    },
  })

  handleSubmit() {
    this.userForm.handleSubmit()
  }
}

export const store = new Store()
