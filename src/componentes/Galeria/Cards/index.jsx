import React from 'react'
import Card from './Card'

export default function Cards({itens, styles}) {
    return (
        <ul className={styles.galeria__cards}>
            {itens.map(item => {
                return (
                    <Card styles={styles} key={item.id} imagem={item.imagem} titulo={item.titulo} creditos={item.creditos} />
                )
            })}
        </ul>
    )
}
