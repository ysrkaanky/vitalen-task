import React from 'react'
import { DetailPageHero } from './components/Hero'
import { Information } from './components/Information/Information'
import { Description } from './components/Description'
import { Cast } from './components/Cast'

interface DetailPageProps {
  name: string
  posterPath: string | null
  description: string | null
  releaseDate: string
  genres: Genre[]
  productionCompany: ProductionCompany
  rating: number
  voteCount: number
  cast: CastMember[]
  runtime: number | null
}

export function DetailPage(props: DetailPageProps) {
  return (
    <>
      <DetailPageHero posterPath={props.posterPath} title={props.name} />
      <Information
        title={props.name}
        genres={props.genres}
        rating={props.rating}
        voteCount={props.voteCount}
        releaseDate={props.releaseDate}
        productionCompany={props.productionCompany}
      />
      <Description description={props.description} />
      <Cast cast={props.cast} />
    </>
  )
}
