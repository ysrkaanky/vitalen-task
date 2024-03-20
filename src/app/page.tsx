import { MoviesCardList, Hero } from '@/components/PageComponents/Homepage'
import { TVShowsCardList } from '@/components/PageComponents/Homepage/CardList/TVShowsCardList'
import { getMovies } from '@/utils/fetch/getMovies'
import { getTVShows } from '@/utils/fetch/getTVShows'

export default async function Home() {
  const movies = await getMovies()
  const heroMovies = movies.slice(0, 2)
  const popularMovies = movies.slice(2, 6)
  const TVShows = (await getTVShows()).slice(0, 4)

  return (
    <>
      <Hero movies={heroMovies} />
      <MoviesCardList movies={popularMovies} title='Popular Movies' />
      <TVShowsCardList shows={TVShows} title='Popular TV Series' />
    </>
  )
}
