import { ImCircleLeft, ImCircleRight } from 'react-icons/im';
import styles from './styles.module.scss';


export default function Header() {
  return(
    <div className={styles.header}>
      <div className={styles.headerText}>
        <h5>INICIAR RÁPIDO COM UMA MÚSICA</h5>
        <h6>Escolhas Rápidas</h6>
      </div>
      <div className={styles.buttons}>
        <ImCircleLeft size="40px" />
        <ImCircleRight size="40px" />
      </div>
    </div>
  )
}