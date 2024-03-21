import { config } from '@/config'
import Image from 'next/image'
import React from 'react'
import styles from './posterCard.module.css'
import Link from 'next/link'

interface PosterCardProps {
  title: string
  poster_path: string
  rating: number
  position: 'hero' | 'list'
  type: 'movie' | 'tvShow'
  id: number
}

export function PosterCard({
  title,
  poster_path,
  rating,
  position,
  id,
  type,
}: PosterCardProps) {
  return (
    <Link
      href={`/${type === 'tvShow' ? 'shows' : 'movies'}/${encodeURIComponent(
        title.toLowerCase()
      )}/${id}`}
      className={`${styles.card} ${styles[position]}`}>
      <div className={styles.card_inner}>
        <PosterCardRating />
        <div className={styles.image_container}>
          <Image
            alt={title}
            src={config.IMAGE_API_URL + poster_path}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <p className={`${styles.card_text_container} ${styles[position]}`}>
          {title}
        </p>
      </div>
    </Link>
  )
  function PosterCardRating() {
    return (
      <p className={`${styles.card_rating} ${styles[position]}`}>
        {rating.toFixed(1)}/10
      </p>
    )
  }
}
