'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const ScrollCtx = React.createContext<undefined | ScrollContext>(undefined)

export function ScrollContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const scrollTop = useRef(0)
  const isHomepage = pathname === '/'

  useEffect(() => {
    if (isHomepage) {
      window.scroll({ behavior: 'instant', top: scrollTop.current })
    }
  }, [isHomepage])

  useEffect(() => {
    if (!isHomepage) return

    function handleScrollEnd() {
      scrollTop.current = window.scrollY
    }
    // I used the 'scrollend' event due to performance concerns, as the 'scroll' event was triggering too frequently.Also, I avoided using useState because it was causing the page to rerender unnecessarily.
    window.addEventListener('scrollend', handleScrollEnd)
    return () => {
      window.removeEventListener('scrollend', handleScrollEnd)
    }
  }, [isHomepage])
  return (
    <ScrollCtx.Provider value={{ homepageScrollTop: scrollTop.current }}>
      {children}
    </ScrollCtx.Provider>
  )
}

export interface ScrollContext {
  homepageScrollTop: number
}
