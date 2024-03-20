import React from 'react'
import styles from './footer.module.css'
import { Container } from '@/components/Container'
import Link from 'next/link'
export function Footer() {
  return (
    <Container wrapper='footer' className={styles.footer}>
      <p className={styles.footer_name}>Yaşar Kağan AKAY</p>
      <div className={styles.footer_links}>
        <Link
          href={'https://github.com/ysrkaanky'}
          target='_blank'
          rel='nofollow noopener noreferrer'>
          Github
        </Link>
        <Link
          href={'https://www.linkedin.com/in/ysrkaanky/'}
          target='_blank'
          rel='nofollow noopener noreferrer'>
          LinkedIn
        </Link>
      </div>
    </Container>
  )
}
