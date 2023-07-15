import styles from "./Rodape.module.scss"
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoTwitter} from 'react-icons/bi';


export default function Rodape() {
  return (
    <footer className={styles.footer}>
        <nav className={styles.footer__nav}>
            <ul className={styles.footer__lista}>
                <a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer">
                    <BiLogoFacebookCircle/>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <BiLogoTwitter/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <BiLogoInstagram/>
                </a>
            </ul>
        </nav>
        <h3>Desenvolvido por João Pedro Lima Gaspar</h3>
    </footer>
  )
}
