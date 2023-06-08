import { Book } from "@prisma/client"
import { BookDetails, BookName, Container } from "./styles"
import { BookImage } from "../RatingCard/styles"
import { Text } from "../Typography"
import { RatingStars } from "../RatingStars"

export type BookWithAvgRating = Book & {
  avgRating: number
}

type BookCardProps = {
  book: BookWithAvgRating
  size: "md" | "lg"
}

export const BookCard = ({ book, size = "md" }: BookCardProps) => {
  const IMAGE_SIZE = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 151,
    }
  }

  const currentSize = IMAGE_SIZE[size]
  return (
    <Container>
      <BookImage
        width={currentSize.width}
        height={currentSize.height}
        alt={book.name}
        src={book.cover_url}
        css={{ minWidth: currentSize.width }} />
      <BookDetails>
        <div>
          <BookName size={"xs"}>
            {book.name}
          </BookName>
          <Text size="sm" color="gray-400">
            {book.author}
          </Text>
        </div>
        <RatingStars rating={book.avgRating} />
      </BookDetails>
    </Container>
  )
}