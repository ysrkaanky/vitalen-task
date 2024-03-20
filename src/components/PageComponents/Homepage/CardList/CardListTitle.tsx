import React from 'react'
import styles from './CardList.module.css'

export function CardListTitle({ title }: { title: string }) {
  return <h2 className={styles.card_list_title}>{title}</h2>
}
