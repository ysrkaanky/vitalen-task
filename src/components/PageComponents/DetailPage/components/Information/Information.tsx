import React from 'react'
import styles from './Information.module.css'
import { Container } from '@/components/Container'

interface InformationProps {
  title: string
  genres: Genre[]
  rating: number
  voteCount: number
  releaseDate: MovieDetailsResponse['release_date']
  productionCompany: ProductionCompany
}

export function Information({
  title,
  genres,
  rating,
  voteCount,
  releaseDate,
  productionCompany,
}: InformationProps) {
  return (
    <Container wrapper='div'>
      <div className={styles.information}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.genres}>
          {genres.map((genre) => {
            return <p key={genre.id}>{genre.name}</p>
          })}
        </div>
        <Rating rating={rating} voteCount={voteCount} />
        <ReleaseDate releaseDate={releaseDate} />
        <ProductionCompany productionCompany={productionCompany} />
      </div>
    </Container>
  )
}

function ProductionCompany({
  productionCompany,
}: {
  productionCompany: ProductionCompany
}) {
  return (
    <div className={styles.productionCompany_container}>
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 512 512'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M266 51.727c-39.32 0-71 31.68-71 71 0 39.319 31.68 71.002 71 71.002s71-31.683 71-71.002c0-39.32-31.68-71-71-71zm-144 32c-30.483 0-55 24.517-55 55 0 30.482 24.517 55.002 55 55.002s55-24.52 55-55.002c0-30.483-24.517-55-55-55zm-23 128v110.002h238V211.727zm350 4.648l-94 40.285v20.133l94 40.285zm-386 2.352v32h18v-32zm113 121.002v17.998h13.012l-51.123 136.275h19.222l51.507-136.275.382 136.275h18l.382-136.275 51.507 136.275h19.222l-51.123-136.275H260v-17.998c-28.003-.003-55.997 0-84 0z'></path>
      </svg>
      <p>{productionCompany.name}</p>
    </div>
  )
}

function ReleaseDate({
  releaseDate,
}: {
  releaseDate: MovieDetailsResponse['release_date']
}) {
  return (
    <div className={styles.releaseDate_container}>
      <svg
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        viewBox='0 0 16 16'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z'></path>
        <path d='M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'></path>
      </svg>
      <p>{releaseDate}</p>
    </div>
  )
}

function Rating({ rating, voteCount }: { rating: number; voteCount: number }) {
  return (
    <div className={styles.rating_container}>
      <svg
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        viewBox='0 0 512 512'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z'></path>
      </svg>
      <p>
        {rating.toFixed(1)}/10 out of {voteCount} rates
      </p>
    </div>
  )
}
