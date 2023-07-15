import React from 'react'

export default function MenuItem({path, alt, titulo, styles}) {
  return (
    <li className={styles.menu__item}>
        <img src={path} alt={alt}/>
        <a href='https://www.google.com'>{titulo}</a>
    </li>
  )
}
