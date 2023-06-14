import { Heading, Text } from '@/components/Typography'
import { ProfileRating } from '..'
import { getRelativeTime } from '@/utils/getRelativeTime'
import { BookDetails, BookImage, CardContent, Container } from './styles'
import Link from 'next/link'
import { RatingStars } from '@/components/RatingStars'

type ProfileRatingCardProps = {
  rating: ProfileRating
}

export const ProfileRatingCard = ({ rating }: ProfileRatingCardProps) => {
  const distance = getRelativeTime(new Date(rating.created_at), 'pt-BR')
  return (
    <Container>
      <Text size={'sm'} color={'gray-300'}>{distance}</Text>
      <CardContent>
        <BookDetails>
          <Link style={{ display: 'flex' }} href={`/explore?book=${rating.book_id}`}>
            <BookImage src={rating.book.cover_url} alt={rating.book.name} width={98} height={134} />
          </Link>
          <section>
            <div>
              <Heading size={'sm'}>{rating.book.name}</Heading>
              <Text size={'sm'} color='gray-400'>{rating.book.author}</Text>
            </div>
            <RatingStars rating={rating.rate} />
          </section>
        </BookDetails>
        <Text size='sm' color='gray-300'>{rating.description}</Text>
      </CardContent>
    </Container>
  )
}