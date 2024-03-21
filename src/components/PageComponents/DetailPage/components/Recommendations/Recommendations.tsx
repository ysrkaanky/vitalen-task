import { Container } from '@/components/Container'
import { PosterCard } from '@/components/PosterCard/PosterCard'
import { getRecommendations } from '@/utils/fetch/getRecommendations'
import React from 'react'
import styles from './Recommendations.module.css'
import { Title } from '../Title'
export async function Recommendations({
  id,
  type,
}: {
  id: number
  type: ContentType
}) {
  const recommendations = (
    await getRecommendations({ id, type })
  ).results.slice(0, 4)
  return (
    <div className={styles.container}>
      <Container wrapper='div'>
        <Title>You Might Also Like</Title>
        <div className={styles.wrapper}>
          {recommendations.map((item) => {
            const title = getTitle(item)
            return (
              <PosterCard
                id={item.id}
                position='list'
                poster_path={item.poster_path}
                rating={item.vote_average}
                title={title}
                type={type === 'tv' ? 'tvShow' : 'movie'}
                key={item.id}
              />
            )
          })}
        </div>
      </Container>
    </div>
  )
}

function getTitle(details: TVShowListDetails | MovieListDetails): string {
  if ('title' in details) {
    return details.title
  } else if ('name' in details) {
    return details.name
  } else {
    throw new Error('Invalid details object')
  }
}
