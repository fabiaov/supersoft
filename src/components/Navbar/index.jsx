import 'bootstrap/dist/css/bootstrap.css';
import styles from './navbar.css'

export default function navBar() {
  return (
    <>
      <nav className={styles.navbar} >
          <a href="/" className={styles.logo}>Supersoft</a>
            <ul className={styles.navlist}>
              <li>Recursos</li>
              <li>Privacidade</li>
              <li>Central de ajuda</li>
              <li>Blog</li>
              <li>WhatsApp Web</li>
            </ul>
      </nav>
    </>
    
  )
}