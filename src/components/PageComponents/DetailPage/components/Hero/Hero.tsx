import React from 'react'
import styles from './Hero.module.css'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { config } from '@/config'

interface DetailPageHeroProps {
  posterPath: string | null
  title: string
}

export function DetailPageHero({ posterPath, title }: DetailPageHeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_background}></div>
      <Container wrapper='div'>
        <div className={styles.image_container}>
          <Image
            src={`${config.IMAGE_API_URL}${posterPath}`}
            fill
            alt={title}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />
        </div>
      </Container>
    </div>
  )
}
