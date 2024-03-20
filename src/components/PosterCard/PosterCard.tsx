import { config } from '@/config'
import Image from 'next/image'
import React from 'react'
import styles from './posterCard.module.css'

export function PosterCard({
  title,
  poster_path,
  rating,
  position,
}: PosterCardProps) {
  return (
    <div className={`${styles.card} ${styles[position]}`}>
      <div className={styles.card_inner}>
        <PosterCardRating />
        <Image
          alt={title}
          src={config.IMAGE_API_URL + poster_path}
          fill
          priority
        />
        <p className={`${styles.card_text_container} ${styles[position]}`}>
          {title}
        </p>
      </div>
    </div>
  )
  function PosterCardRating() {
    return (
      <p className={`${styles.card_rating} ${styles[position]}`}>
        {rating.toFixed(1)}/10
      </p>
    )
  }
}

interface PosterCardProps {
  title: string
  poster_path: string
  rating: number
  position: 'hero' | 'list'
}
