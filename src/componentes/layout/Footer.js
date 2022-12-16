import { FaWhatsapp, FaInstagram, FaSuitcase } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <a href='https://wa.me/5511980578428?text=Eu%20vi%20o%20seu,%20gostaria%20de%20sabert%20mais%20sobre.' target="_blank">
        <li>
          <FaWhatsapp />
        </li>
        </a>
        <a href='https://www.instagram.com/hiroshi_yosh/' target="_blank">
        <li>
          <FaInstagram />
        </li>
        </a>
        <a href='#'>
        <li>
          <FaSuitcase />
        </li>
        </a>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2021
      </p>
    </footer>
  )
}

export default Footer