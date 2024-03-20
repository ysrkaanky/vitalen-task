import React from 'react'
import styles from './hero.module.css'

export function HeroText() {
  return (
    <div className={styles['hero_text-container']}>
      <p>Welcome to the</p>
      <p>World of TV Series & Movies</p>
    </div>
  )
}
