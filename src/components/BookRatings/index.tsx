import { Fragment, useState } from 'react'
import { Text } from '../Typography'
import { Link } from '../UI/Link'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { Container } from './styles'
import { RatingForm } from '../RatingForm'
import { useSession } from 'next-auth/react'
import { AuthButtons } from '../AuthButton'
import { LoginDialog } from '../LoginDialog'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export const BookRatings = ({ ratings, bookId }: BookRatingsProps) => {
  const { status, data: session } = useSession()
  const [showForm, setShowForm] = useState(false)

  const isAuthenticated = status === 'authenticated'

  const handleRate = () => {
    if (!isAuthenticated) return
    setShowForm(true)
  }

  const RatingWrapper = isAuthenticated ? Fragment : LoginDialog

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const canRate = ratings.every(x => x.user_id !== session?.user?.id)
  //a linha acima diz: posso avavilar = cada avaliacao podera ser feita caso
  //o usuario logado seja diferente do usuario que ja avaliou.
  //se ja existir avaliacao para deste usuario para o livro em questao 
  //o programa nao permitira nova avaliacao.

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        {canRate && (
          <RatingWrapper>
            <Link withoutIcon onClick={handleRate} text='Avaliar' />
          </RatingWrapper>
        )}

      </header>
      <section>
        {showForm && <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />}
        {sortedRatingsByDate && ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}