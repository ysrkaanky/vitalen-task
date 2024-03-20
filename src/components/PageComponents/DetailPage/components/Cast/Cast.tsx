'use client'
import { Container } from '@/components/Container'
import { config } from '@/config'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Cast.module.css'
import { Skeleton } from '@/components/Skeleton'
export function Cast({ cast }: { cast: CastMember[] }) {
  const [visibleCastCount, setVisibleCastCount] = useState(4)
  const visibleCast = cast.slice(0, visibleCastCount)
  const isButtonVisible = visibleCastCount !== cast.length

  function handleShowMoreButtonClick() {
    const targetCount = visibleCastCount + 4
    setVisibleCastCount(targetCount < cast.length ? targetCount : cast.length)
  }
  return (
    <div className={styles.cast_container}>
      <Container wrapper='div'>
        <h2 className={styles.cast_title}>Cast</h2>
        <div className={styles.cast_card_container}>
          {visibleCast.map((castMember) => (
            <CastCard {...castMember} key={castMember.id} />
          ))}
        </div>
        <div className={styles.button_container}>
          {isButtonVisible && (
            <button onClick={handleShowMoreButtonClick}>SHOW MORE</button>
          )}
        </div>
      </Container>
    </div>
  )
}

function CastCard({
  id,
  profile_path,
  name,
  original_name,
  character,
}: CastMember) {
  const [isLoaded, setIsLoaded] = React.useState(false)
  return (
    <div key={id} className={styles.cast_card}>
      <div className={`${styles['cast_card-image_container']}`}>
        <Image
          className={` ${isLoaded ? '' : 'invisible'}`}
          onLoad={() => {
            setIsLoaded(true)
          }}
          src={
            profile_path
              ? `${config.IMAGE_API_URL}${profile_path}`
              : '/assets/img/placeholders/person.webp'
          }
          fill
          alt={name}
          sizes='(max-width: 768px) 25vw, 10vw'
        />
        {!isLoaded && <Skeleton />}
      </div>
      <div className={styles.cast_card_text_container}>
        <p>{original_name}</p>
        <p>as</p>
        <p>{character}</p>
      </div>
    </div>
  )
}
