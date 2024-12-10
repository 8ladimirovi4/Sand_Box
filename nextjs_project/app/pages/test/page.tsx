import Link from 'next/link'
import React from 'react'
import styles from './Test.module.css'
// для короткого указания ссылки <Link href='/test'>to test</Link> имя коневого файла страницы должно быть index.tsx
 const Test = () => {
  return (
    <>
    <div>
      TEST PAGE
    </div>
      <Link href='/'>
      <span className={styles.link}>Go to Home</span>
      </Link>
      </>
  )
}

export default Test

