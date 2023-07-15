import styles from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, filtrarFotos, setItens}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags: </p>
        <ul className={styles.tags__lista}>
            {tags.map( tag => {
              return <li key={tag} onClick={evento => filtrarFotos(tag)}>{tag}</li>
            })}
            <li onClick={evento => setItens(fotos)}>Todas</li>
        </ul>
    </div>
  )
}
