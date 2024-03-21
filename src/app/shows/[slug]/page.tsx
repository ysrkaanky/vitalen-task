import { DetailPage } from '@/components/PageComponents/DetailPage'
import { getImages } from '@/utils/fetch/getImages'
import { getTVShowDetails } from '@/utils/fetch/getTVShowDetails'
import React from 'react'

export default async function Shows({ params: { slug } }: DetailsPageProps) {
  const parsedSlug = slug.split('-')
  const showId = Number(parsedSlug[parsedSlug.length - 1])
  if (!isFinite(showId)) throw new Error('movie id must be an int')
  const show = await getTVShowDetails(showId)
  const images = await getImages({ id: showId, type: 'tv' })

  return (
    <DetailPage
      cast={show.credits.cast}
      description={show.overview}
      genres={show.genres}
      name={show.name}
      posterPath={show.poster_path}
      productionCompany={show.production_companies[0]}
      rating={show.vote_average}
      releaseDate={show.first_air_date}
      voteCount={show.vote_count}
      images={images}
      contentType='tv'
      contentId={showId}
    />
  )
}
