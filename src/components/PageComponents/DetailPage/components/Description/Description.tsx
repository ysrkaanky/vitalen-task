import React from 'react'
import styles from './Description.module.css'
import { Container } from '@/components/Container'

interface DescriptionProps {
  description: string | null
}

export function Description({ description }: DescriptionProps) {
  return (
    <div className={styles.description}>
      <Container wrapper='div'>
        <h2 className={styles.description_title}>Story Line</h2>
        <p>{description}</p>
      </Container>
    </div>
  )
}
