'use client'
import React, { useEffect } from 'react'
import styles from './Images.module.css'
import Link from 'next/link'
import { config } from '@/config'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { Skeleton } from '@/components/Skeleton'
import { Title } from '../Title'

interface ImagesProps {
  images: MovieImages
  name: string
}
export function Images({ images, name }: ImagesProps) {
  const imageToDisplay = images.backdrops.slice(0, 4)
  return (
    <div>
      <Container wrapper='div'>
        <Title>Images</Title>
        <div className={styles.images_wrapper}>
          {imageToDisplay.map((img, i) => {
            return <ImageContainer img={img} name={name} key={i} />
          })}
        </div>
      </Container>
    </div>
  )
}

function ImageContainer({ img, name }: { img: ImageDetails; name: string }) {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const url = `${config.IMAGE_API_URL}${img.file_path}`

  return (
    <div className={styles.image_container}>
      <Image
        className={`${isLoaded ? '' : 'invisible'}`}
        onLoad={() => {
          setIsLoaded(true)
        }}
        src={url}
        alt={name}
        width={img.width}
        height={img.height}
        sizes='100vw,(max-width: 768px) 50vw,50vw'
      />
      {!isLoaded && <Skeleton />}
    </div>
  )
}
