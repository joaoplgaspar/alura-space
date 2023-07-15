import styles from './Menu.module.scss'
import itens from './itens.json'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>

            {itens.map( item => {
                return (
                    <MenuItem 
                        path={item.path} 
                        alt={item.alt} 
                        titulo={item.link} 
                        key={item.id} 
                        styles={styles}
                    />
                )
            })}
        </ul>
    </nav>
  )
}
