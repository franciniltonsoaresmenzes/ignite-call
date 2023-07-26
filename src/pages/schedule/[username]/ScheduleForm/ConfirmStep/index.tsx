import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import {
  ConfirmActions,
  ConfirmError,
  ConfirmForm,
  ConfirmHeader,
} from './styles'
import { Clock } from 'phosphor-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'

const confirmStepSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa no mínimo 3 caracteres.' }),
  email: z.string().email({ message: 'Digite um e-mail valído.' }),
  observation: z.string().nullable(),
})

type confirmStepData = z.infer<typeof confirmStepSchema>

interface ConfirmStepProps {
  shedulingDate: Date
  onCancelCofirmation: () => void
}

export function ConfirmStep({
  shedulingDate,
  onCancelCofirmation,
}: ConfirmStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<confirmStepData>({
    resolver: zodResolver(confirmStepSchema),
  })

  function handleConfirmStepScheduling(data: confirmStepData) {
    console.log(data)
  }

  const describedDate = dayjs(shedulingDate).format('DD[ de ]MMMM[ de ]YYYY')
  const describedTime = dayjs(shedulingDate).format('HH:mm[h]')

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmStepScheduling)}>
      <ConfirmHeader>
        <Text>{describedDate}</Text>
        <Text>
          <Clock /> {describedTime}
        </Text>
      </ConfirmHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome" {...register('name')} />
        {errors.name && (
          <ConfirmError size="sm">{errors.name.message}</ConfirmError>
        )}
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput
          type="email"
          placeholder="john@example.com"
          {...register('email')}
        />
        {errors.email && (
          <ConfirmError size="sm">{errors.email.message}</ConfirmError>
        )}
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea {...register('observation')} />
      </label>

      <ConfirmActions>
        <Button type="button" variant="tertiary" onClick={onCancelCofirmation}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </ConfirmActions>
    </ConfirmForm>
  )
}
