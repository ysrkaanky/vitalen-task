'use client'
import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export function NavLinks() {
  const isHomepage = usePathname() === '/'
  const router = useRouter()
  function handleNavLinkClick(e: React.SyntheticEvent) {
    // I need this function instead of passing the target element's id as the href attribute to anchor elements because the CardList components' titles are not visible due to the fixed header. I extracted the header's height from the element's distance to the top.
    e.preventDefault()
    const eventTarget = e.target
    if (eventTarget instanceof HTMLAnchorElement) {
      const targetSection =
        eventTarget.attributes.getNamedItem('data-target')?.value
      if (!targetSection) return

      const targetElement = document.querySelector(`#${targetSection}`)
      if (!targetElement) return

      const scrollPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 90

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className={styles.links}>
      {isHomepage && (
        <>
          <Link onClick={handleNavLinkClick} href={'#'} data-target='tvShows'>
            Popular TV Series
          </Link>
          <Link onClick={handleNavLinkClick} href={'#'} data-target='movies'>
            Popular Popular Movies
          </Link>
        </>
      )}
      {!isHomepage && (
        <>
          <Link href={'/'}>Homepage</Link>
        </>
      )}
    </div>
  )
}
