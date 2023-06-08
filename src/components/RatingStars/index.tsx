import { ComponentProps } from "@stitches/react";
import { Container } from "./styles"
import { Star } from "@phosphor-icons/react";

type RatingStarsProps = ComponentProps<typeof Container> & {
  rating: number;
  size?: "sm" | "md" | "lg"
}

export const RatingStars = ({ rating, size, ...props }: RatingStarsProps) => {
  return (
    <Container {...props}>
      {Array.from({ length: 5 }).map((_, i) =>
        <Star key={`star-${i}`}
          weight="fill"
        />
      )}
    </Container>
  )
}