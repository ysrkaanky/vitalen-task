'use client'
import { useScrollContext } from '@/context/ScrollContext'
import React from 'react'

export function Scroller() {
  const { scrollPosition } = useScrollContext()
  React.useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
      })
    }, 0)
  }, [scrollPosition])
  return <></>
}
