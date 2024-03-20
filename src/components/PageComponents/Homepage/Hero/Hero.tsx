import React from 'react'
import styles from './hero.module.css'
import { HeroBackground } from './HeroBackground'
import { PosterCard } from '../../../PosterCard/PosterCard'
import { HeroText } from './HeroText'
import { Container } from '@/components/Container'

interface HeroProps {
  contents: {
    poster_path: string
    vote_average: number
    title: string
    id: number
    type: 'movie' | 'tvShow'
  }[]
}

export async function Hero({ contents }: HeroProps) {
  return (
    <Container wrapper='section' className={styles.hero_container}>
      <HeroBackground />
      <div className={styles.hero_wrapper}>
        <HeroText />
        {contents.map((content) => (
          <PosterCard
            position='hero'
            poster_path={content.poster_path}
            rating={content.vote_average}
            title={content.title}
            key={content.id}
            id={content.id}
            type={content.type}
          />
        ))}
      </div>
    </Container>
  )
}
