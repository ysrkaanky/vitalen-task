'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Context = React.createContext<undefined | { scrollPosition: number }>(
  undefined
)

export default function ScrollContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const scrollPositionRef = React.useRef(0)
  const isHomepage = usePathname() === '/'

  const handleScroll = React.useCallback(() => {
    if (isHomepage) {
      scrollPositionRef.current = window.scrollY
    }
  }, [isHomepage])

  React.useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <Context.Provider value={{ scrollPosition: scrollPositionRef.current }}>
      {children}
    </Context.Provider>
  )
}

export function useScrollContext() {
  const ctx = React.useContext(Context)
  if (!ctx)
    throw new Error(
      'useScrollContext can not be used outside ScrollContextProvider'
    )
  return ctx
}
