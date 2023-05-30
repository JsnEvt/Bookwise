import { signOut, useSession } from 'next-auth/react'
import { Navigation } from '../Navigation'
import { Container, LoginButton, UserDetails } from './styles'
import { SignIn, SignOut } from '@phosphor-icons/react'
import { Text } from '../Typography'
import { Avatar } from '../UI/Avatar'
import { useRouter } from 'next/router'

export const Sidebar = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const user = session?.user

  const handleOpenProfile = () => {
    router.push(`/profile/${user?.id}`)
  }

  return (
    <Container>
      <div>
        <img className='logo' src='/images/logo.svg' alt='BookWise Logo' />
        <Navigation />
      </div>
      <footer>
        {!user ? (
          <div>
            <LoginButton href={'/login'}>
              Fazer login
              <SignIn size={24} />
            </LoginButton>
          </div>
        ) : (
          <UserDetails>
            <Avatar size='sm' src={user.avatar_url} alt={user.name} onClick={handleOpenProfile} css={{ cursor: 'pointer' }} />
            <Text size={'sm'}>{user?.name}</Text>
            <SignOut color='#f75a68' size={20} onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </Container>
  )
}