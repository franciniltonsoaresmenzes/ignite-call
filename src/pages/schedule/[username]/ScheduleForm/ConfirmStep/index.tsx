import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmActions, ConfirmForm, ConfirmHeader } from './styles'
import { Clock } from 'phosphor-react'

export function ConfirmStep() {
  function handleConfirmStepScheduling() {}

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmStepScheduling}>
      <ConfirmHeader>
        <Text>11 de Julho de 2023</Text>
        <Text>
          <Clock /> 18:00h
        </Text>
      </ConfirmHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome" />
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput type="email" placeholder="john@example.com" />
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>

      <ConfirmActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </ConfirmActions>
    </ConfirmForm>
  )
}
