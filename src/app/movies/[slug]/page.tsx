import { DetailPage } from '@/components/PageComponents/DetailPage'
import { getMovieDetails } from '@/utils/fetch/getMovieDetails'
import React from 'react'

export default async function MoviesPage({
  params: { slug },
}: DetailsPageProps) {
  const parsedSlug = slug.split('-')
  const movieId = Number(parsedSlug[parsedSlug.length - 1])
  if (!isFinite(movieId)) throw new Error('movie id must be an int')
  const movie = await getMovieDetails(movieId)

  return (
    <DetailPage
      cast={movie.credits.cast}
      description={movie.overview}
      genres={movie.genres}
      name={movie.title}
      posterPath={movie.poster_path}
      productionCompany={movie.production_companies[0]}
      rating={movie.vote_average}
      releaseDate={movie.release_date}
      voteCount={movie.vote_count}
      runtime={movie.runtime}
    />
  )
}
