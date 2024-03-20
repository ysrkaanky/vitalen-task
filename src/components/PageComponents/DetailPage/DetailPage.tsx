import React from 'react'
import { DetailPageHero } from './components/Hero'
import { Information } from './components/Information'
import { Description } from './components/Description'
import { Cast } from './components/Cast'
import styles from './DetailsPage.module.css'
import { Container } from '@/components/Container'
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
}

export function DetailPage(props: DetailPageProps) {
  return (
    <>
      <DetailPageHero posterPath={props.posterPath} title={props.name} />
      <h1 className={styles.title}>{props.name}</h1>
      <div className={styles.genres}>
        {props.genres.map((genre) => {
          return <p key={genre.id}>{genre.name}</p>
        })}
      </div>
      <Container wrapper='div' className={styles.container}>
        <Information
          title={props.name}
          genres={props.genres}
          rating={props.rating}
          voteCount={props.voteCount}
          releaseDate={props.releaseDate}
          productionCompany={props.productionCompany}
        />
        <Description description={props.description} />
      </Container>
      <Cast cast={props.cast} />
    </>
  )
}
