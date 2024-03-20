import React from 'react'
import styles from './hero.module.css'
import { HeroBackground } from './HeroBackground'
import { PosterCard } from '../../../PosterCard/PosterCard'
import { HeroText } from './HeroText'
import { Container } from '@/components/Container'

interface HeroProps {
  movies: MovieListDetails[]
}

export async function Hero({ movies }: HeroProps) {
  return (
    <Container wrapper='section' className={styles.hero_container}>
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
            id={movie.id}
            type='movie'
          />
        ))}
      </div>
    </Container>
  )
}
