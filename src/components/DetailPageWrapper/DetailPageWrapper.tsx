import React from 'react'
import styles from './DetailPageWrapper.module.css'
export function DetailPageWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.page_wrapper}>{children}</div>
}
