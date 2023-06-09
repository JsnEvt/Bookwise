import { signIn } from "next-auth/react"
import { AuthButton, Container } from "./styles"
import { useRouter } from "next/router"

type AuthButtonsProps = {
  canGuest?: boolean //pode ser um visitante a avaliar um livro?
  callbackUrl?: string
}

export const AuthButtons = ({ canGuest, callbackUrl = "/" }: AuthButtonsProps) => {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push(callbackUrl)
      return
    }
    signIn(provider, {
      callbackUrl
    })
  }

  return (
    <Container>
      <AuthButton onClick={() => handleSignIn("google")}>
        <img src="/images/icons/google.svg" alt="google_logo" />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn("github")}>
        <img src="/images/icons/github.svg" alt="github_logo" />
        Entrar com Github
      </AuthButton>
      {canGuest && (
        <AuthButton onClick={() => handleSignIn()}>
          <img src="/images/icons/rocket.svg" alt="rocket_icon" />
          Entrar como visitante
        </AuthButton>

      )}
    </Container>
  )
}