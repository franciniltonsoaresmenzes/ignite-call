import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

const clainUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa de pelo menos três letras' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens',
    })
    .transform((value) => value.toLowerCase()),
})

type ClainUsernameFormData = z.infer<typeof clainUsernameFormSchema>

export function ClainUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClainUsernameFormData>({
    resolver: zodResolver(clainUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClainUsername(data: ClainUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }
  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClainUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username?.message
            : 'Digite o nome do usuário.'}
        </Text>
      </FormAnnotation>
    </>
  )
}
