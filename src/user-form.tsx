import { Button, Container, Group, Paper, Stack, Text, Title } from '@mantine/core'

import type { UserFormType } from './store'

import { withForm } from './contexts'

export const UserForm = withForm(({
  defaultValues: {} as UserFormType,
  render: ({ form }) => (
    <Container size="sm" py="xl">
      <Paper shadow="md" p="xl" radius="md">
        <Title order={2} ta="center" mb="lg" c="blue">
          User Registration
        </Title>
        <Text c="dimmed" ta="center" mb="xl">
          Please fill out all fields to create your account
        </Text>

        <form.AppForm>
          <Stack gap="md">
            <Group grow>
              <form.AppField
                name="firstName"
                children={field => (
                  <field.TextInput
                    label="First Name"
                    placeholder="Enter your first name"
                    value={field.state.value}
                    error={field.state.meta.errors.map((e: any) => e.message).join(', ')}
                    onChange={e => field.handleChange(e.target.value)}
                    withAsterisk
                  />
                )}
              />

              <form.AppField
                name="lastName"
                children={field => (
                  <field.TextInput
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={field.state.value}
                    error={field.state.meta.errors.map((e: any) => e?.message).join(', ')}
                    onChange={e => field.handleChange(e.target.value)}
                    withAsterisk
                  />
                )}
              />
            </Group>

            <form.AppField
              name="email"
              children={field => (
                <field.TextInput
                  label="Email Address"
                  placeholder="your.email@example.com"
                  value={field.state.value}
                  error={field.state.meta.errors.map((e: any) => e?.message).join(', ')}
                  onChange={e => field.handleChange(e.target.value)}
                  withAsterisk
                />
              )}
            />

            <form.AppField
              name="age"
              children={field => (
                <field.TextInput
                  type="number"
                  label="Age"
                  placeholder="Enter your age"
                  value={field.state.value}
                  error={field.state.meta.errors.map((e: any) => e?.message).join(', ')}
                  onChange={e => field.handleChange(Number(e.target.value))}
                  withAsterisk
                />
              )}
            />

            <form.AppField
              name="password"
              children={field => (
                <field.PasswordInput
                  label="Password"
                  placeholder="Create a strong password"
                  value={field.state.value}
                  error={field.state.meta.errors.map((e: any) => e?.message).join(', ')}
                  onChange={e => field.handleChange(e.target.value)}
                  withAsterisk
                />
              )}
            />

            <form.AppField
              name="confirmPassword"
              children={field => (
                <field.PasswordInput
                  label="Confirm Password"
                  placeholder="Repeat your password"
                  value={field.state.value}
                  error={field.state.meta.errors.map((e: any) => e?.message).join(', ')}
                  onChange={e => field.handleChange(e.target.value)}
                  withAsterisk
                />
              )}
            />

            <Button
              onClick={() => form.handleSubmit()}
              size="md"
              radius="md"
              mt="lg"
              fullWidth
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
              variant="gradient"
            >
              Create Account
            </Button>
          </Stack>
        </form.AppForm>
      </Paper>
    </Container>
  ),
}))
