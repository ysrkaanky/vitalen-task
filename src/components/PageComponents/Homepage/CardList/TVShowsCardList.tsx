import React from 'react'
import styles from './CardList.module.css'
import { Container } from '@/components/Container'
import { CardListTitle } from './CardListTitle'
import { PosterCard } from '@/components/PosterCard/PosterCard'
export function TVShowsCardList({ shows, title }: TVShowsCardListProps) {
  return (
    <Container id='tvShows' wrapper='section' className={styles.card_list}>
      <CardListTitle title={title} />
      <div className={styles.card_container}>
        {shows.map((show) => (
          <PosterCard
            position='list'
            poster_path={show.poster_path}
            rating={show.vote_average}
            title={show.name}
            key={show.id}
            id={show.id}
            type='tvShow'
          />
        ))}
      </div>
    </Container>
  )
}

interface TVShowsCardListProps {
  title: string
  shows: TVShowListDetails[]
}
