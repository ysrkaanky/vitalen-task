import React from 'react'
import styles from './CardList.module.css'
import { Container } from '@/components/Container'
import { CardListTitle } from './CardListTitle'
import { PosterCard } from '@/components/PosterCard/PosterCard'
export function MoviesCardList({ movies, title }: MoviesCardListProps) {
  return (
    <Container id='movies' wrapper='section' className={styles.card_list}>
      <CardListTitle title={title} />
      <div className={styles.card_container}>
        {movies.map((movie) => (
          <PosterCard
            position='list'
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

interface MoviesCardListProps {
  title: string
  movies: MovieListDetails[]
}
