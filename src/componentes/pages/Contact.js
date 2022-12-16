import Container from '../layout/Container'
import { FaWhatsapp, FaInstagram, FaSuitcase, FaEnvelope } from 'react-icons/fa'
import styles from './Contact.module.css'

function Contact() {
    return (
      <Container customClass="column">
<div className={styles.master}>
      <div className={styles.titles}>  
        <h1>Entre em contato</h1>
        <p>Entre em contato pelas opções abaixo</p>
      </div>
      <div className={styles.list}>
        <ul>
          <li>
            <a href='https://wa.me/5511980578428?text=Eu%20vi%20o%20seu,%20gostaria%20de%20sabert%20mais%20sobre.' target="_blank">
            <FaWhatsapp /> <br/> <sapan>Whatsapp</sapan>
          </a>
          </li>

          <li>
            <a href='https://www.instagram.com/hiroshi_yosh/' target="_blank">
              <FaInstagram /> <br/> <sapan>Instagram</sapan>
            </a>
          </li>
          <li>
          <a href='mailto:pedrohiroshiyoshidda22@gmail.com' target="_blank">
              <FaEnvelope /> <br/> <sapan>Email</sapan>
          </a>
          </li>
          <li>
            <a href='#' target="_blank">
              <FaSuitcase/> <br/> <span>Portfólio</span>
            </a>
          </li>
        </ul>
      </div>  
</div>
      </Container>
    );
  }
  
  export default Contact;