import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'
export function Header() {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  )
}

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} href={'/'}>
        Logo
      </Link>
      <div className={styles.links}>
        <Link href={'/'}>Popular TV Series</Link>
        <Link href={'/'}>Popular Popular Movies</Link>
      </div>
    </nav>
  )
}
