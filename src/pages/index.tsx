import { signOut, useSession } from 'next-auth/react'
import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { HomeContainer } from '@/styles/pages/home'
import { LatestRatings } from '@/components/LatestRatings'


const HomePage: NextPageWithLayout = () => {
  const { data } = useSession()
  return (
    <HomeContainer>
      <LatestRatings />
    </HomeContainer>
  )
}

HomePage.getLayout = (page) => {
  return (
    <DefaultLayout title='Início'>
      {page}
    </DefaultLayout>
  )
}

export default HomePage;
