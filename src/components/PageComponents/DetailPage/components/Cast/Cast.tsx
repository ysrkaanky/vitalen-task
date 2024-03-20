import { Container } from '@/components/Container'
import { config } from '@/config'
import Image from 'next/image'
import React from 'react'
import styles from './Cast.module.css'
export function Cast({ cast }: { cast: CastMember[] }) {
  return (
    <div>
      <Container wrapper='div'>
        <h2 className={styles.cast_title}>Cast</h2>
        {cast.map((castMember) => {
          return (
            <div key={castMember.id} className={styles.cast_card}>
              <div className={styles['cast_card-image_container']}>
                <Image
                  src={`${config.IMAGE_API_URL}${castMember.profile_path}`}
                  fill
                  alt={castMember.name}
                />
              </div>
              <div className={styles.cast_card_text_container}>
                <p>{castMember.original_name}</p>
                <p>as</p>
                <p>{castMember.character}</p>
              </div>
            </div>
          )
        })}
      </Container>
    </div>
  )
}
