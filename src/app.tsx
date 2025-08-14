import '@mantine/core/styles.css'
import { Flex, MantineProvider } from '@mantine/core'

import { theme } from './theme'
import { store } from './store'
import { UserForm } from './user-form'
import { useAppForm } from './contexts'

export default function App() {
  const form = useAppForm(store.userForm)
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Flex
        justify="center"
        align="center"
        h="100vh"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <UserForm form={form} />
      </Flex>
    </MantineProvider>
  )
}
