import { MoviesCardList, Hero } from '@/components/PageComponents/Homepage'
import { TVShowsCardList } from '@/components/PageComponents/Homepage/CardList/TVShowsCardList'
import { Scroller } from '@/components/PageComponents/Homepage/Scroller'
import { getMovies } from '@/utils/fetch/getMovies'
import { getTVShows } from '@/utils/fetch/getTVShows'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'World of Movies & TV Series',
}

export default async function Home() {
  const movies = await getMovies()
  const tvShows = await getTVShows()
  const heroMovie = movies[0]
  const heroTvShow = tvShows[0]
  const popularMovies = movies.slice(1, 9)
  const TVShows = tvShows.slice(1, 9)
  return (
    <>
      <Scroller />
      <Hero
        contents={[
          {
            id: heroMovie.id,
            poster_path: heroMovie.poster_path,
            title: heroMovie.title,
            type: 'movie',
            vote_average: heroMovie.vote_average,
          },
          {
            type: 'tvShow',
            title: heroTvShow.name,
            id: heroTvShow.id,
            poster_path: heroTvShow.poster_path,
            vote_average: heroTvShow.vote_average,
          },
        ]}
      />
      <MoviesCardList movies={popularMovies} title='Popular Movies' />
      <TVShowsCardList shows={TVShows} title='Popular TV Series' />
    </>
  )
}
