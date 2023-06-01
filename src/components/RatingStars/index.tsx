import { ComponentProps } from '@stitches/react';
import { Container } from './styles'

type RatingStarsProps = ComponentProps<typeof Container> & {
  rating: number;
  size?: 'sm' | 'md' | 'lg'
}

export const RatingStars = ({ rating, size, ...props }: RatingStarsProps) => {
  return (
    <Container {...props}>

    </Container>
  )
}