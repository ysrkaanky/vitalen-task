import { CardList, Hero } from '@/components/PageComponents/Homepage'
import { getMovies } from '@/utils/movies/getMovies'

export default function Home() {
  const movies = await getMovies()

  return (
    <>
      <Hero />
      <CardList movies={[]} title='Popular Movies' />
      <CardList movies={[]} title='Popular TV Series' />
    </>
  )
}
