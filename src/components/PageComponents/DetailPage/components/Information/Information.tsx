import React from 'react'
import styles from './Information.module.css'
import { Container } from '@/components/Container'
import { CalendarIcon, CameraIcon, StarIcon } from './Icons'

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
  const formatter = new Intl.DateTimeFormat('en-EN', { dateStyle: 'long' })
  return (
    <div className={styles.information}>
      <DataDisplay
        data={` ${rating.toFixed(1)}/10 out of ${voteCount} rates`}
        type='rating'
      />
      <DataDisplay
        data={formatter.format(new Date(releaseDate))}
        type='releaseDate'
      />
      <DataDisplay data={productionCompany.name} type='productionCompany' />
    </div>
  )
}

function DataDisplay({
  data,
  type,
}: {
  data: string
  type: 'rating' | 'productionCompany' | 'releaseDate'
}) {
  return (
    <div className={styles.information_details_container}>
      <div className={styles.icon_container}>
        {type === 'productionCompany' && <CameraIcon />}
        {type === 'rating' && <StarIcon />}
        {type === 'releaseDate' && <CalendarIcon />}
      </div>
      <p>{data}</p>
    </div>
  )
}
