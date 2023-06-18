import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'
import { ClainUsernameForm } from './components/ClaimUsernameForm'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
      </Head>
      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClainUsernameForm />
        </Hero>
        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Caléndario simbolizando em funcionamento"
          />
        </Preview>
      </Container>
    </>
  )
}
