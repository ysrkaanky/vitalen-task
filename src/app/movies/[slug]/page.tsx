import { DetailPageWrapper } from '@/components/DetailPageWrapper'
import { getMovieDetails } from '@/utils/fetch/getMovieDetails'
import React from 'react'

export default async function MoviesPage({
  params: { slug },
}: DetailsPageProps) {
  const parsedSlug = slug.split('-')
  const movieId = Number(parsedSlug[parsedSlug.length - 1])
  if (!isFinite(movieId)) throw new Error('movie id must be an int')
  const movie = await getMovieDetails(movieId)

  return <DetailPageWrapper>{movie.title}</DetailPageWrapper>
}
