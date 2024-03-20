import React from 'react'
import styles from './hero.module.css'
import { HeroBackground } from './HeroBackground'
import { PosterCard } from '../../../PosterCard/PosterCard'
import { HeroText } from './HeroText'
import { Container } from '@/components/Container'

interface HeroProps {
  movies: MovieDetails[]
}

export async function Hero({ movies }: HeroProps) {
  return (
    <div className={styles.hero}>
      <Container wrapper='section'>
        <HeroBackground />
        <div className={styles.hero_wrapper}>
          <HeroText />
          {movies.map((movie) => (
            <PosterCard
              position='hero'
              poster_path={movie.poster_path}
              rating={movie.vote_average}
              title={movie.title}
              key={movie.id}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
