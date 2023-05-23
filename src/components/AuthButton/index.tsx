import { AuthButton, Container } from './styles'

export const AuthButtons = () => {
  return (
    <Container>
      <AuthButton>
        <img src="/images/icons/google.svg" alt="google_logo" />
        Entrar com Google
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/github.svg" alt="github_logo" />
        Entrar com Github
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/rocket.svg" alt="rocket_icon" />
        Entrar como visitante
      </AuthButton>
    </Container>
  )
}