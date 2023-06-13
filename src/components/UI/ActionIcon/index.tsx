import { ReactNode } from 'react'
import { theme } from '../../../../stitches.config'
import { Container } from './styles'
import { ComponentProps } from '@stitches/react'

type ActionIconProps = ComponentProps<typeof Container> & {
  icon: ReactNode
  iconColor: keyof typeof theme.colors //para ter acesso a todas as cores do stitches
}

export const ActionIcon = ({ icon, iconColor, ...props }: ActionIconProps) => {
  return (
    <Container {...props} css={{
      color: `$${iconColor}` //usara a cor que o usuario passar.
    }}>
      {icon}
    </Container>
  )
}