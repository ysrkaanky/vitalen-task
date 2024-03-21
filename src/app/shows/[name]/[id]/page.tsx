import { DetailPage } from '@/components/PageComponents/DetailPage'
import { getImages } from '@/utils/fetch/getImages'
import { getTVShowDetails } from '@/utils/fetch/getTVShowDetails'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params,
}: DetailsPageProps): Promise<Metadata> {
  const id = Number(params.id)
  if (!isFinite(id)) throw new Error('movie id must be an int')
  const show = await getTVShowDetails(id)

  return {
    title: `TV Show | ${show.name}`,
  }
}

export default async function Shows({
  params: { id, name },
}: DetailsPageProps) {
  const showId = Number(id)
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
