import { AuthButton, Container } from './styles'

export const AuthButtons = () => {
  return (
    <Container>
      <AuthButton>
        Entrar com Google
      </AuthButton>
      <AuthButton>
        Entrar com Github
      </AuthButton>
      <AuthButton>
        Entrar como visitante
      </AuthButton>
    </Container>
  )
}