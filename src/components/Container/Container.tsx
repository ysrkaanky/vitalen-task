import React from 'react'
import styles from './Container.module.css'
interface ContainerProps {
  children: React.ReactNode
  wrapper: keyof JSX.IntrinsicElements
  className?: string
  id?: string
}
export function Container({
  children,
  wrapper: Wrapper,
  className,
  id,
}: ContainerProps) {
  return (
    <Wrapper
      id={id}
      className={`${styles.container} ${className ? `${className}` : ''}`}>
      {children}
    </Wrapper>
  )
}
