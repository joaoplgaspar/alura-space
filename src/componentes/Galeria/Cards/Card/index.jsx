import React from 'react'
import open from './open.png'
import favorito from './favorito.png'

export default function Card({imagem, titulo, creditos, styles}) {
    return (
        <li className={styles.galeria__card}>
            <img
                className={styles.galeria__imagem}
                src={imagem}
                alt={titulo}
            />
            <p className={styles.galeria__descricao}>{titulo}</p>
            <div>
                <p>{creditos}</p>
                <span>
                    <img src={favorito} alt="ícone coração de curtir" />
                    <img src={open} alt="ícone de abrir modal" />
                </span>
            </div>
        </li>
    )
}
