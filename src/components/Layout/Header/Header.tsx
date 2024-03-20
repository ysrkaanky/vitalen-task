import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { NavLinks } from './NavLinks'
export function Header() {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  )
}

function NavBar() {
  return (
    <Container wrapper='div' className={styles.navbar_wrapper}>
      <nav className={styles.navbar}>
        <Link className={styles.logo} href={'/'}>
          Logo
        </Link>
        <NavLinks />
      </nav>
    </Container>
  )
}
