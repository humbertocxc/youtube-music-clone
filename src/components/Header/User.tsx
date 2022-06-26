import { MdOutlineCastConnected } from 'react-icons/md';
import styles from './styles.module.scss';
import Logo from '../Top/Logo';


export default function User() {
  return(
    <div className={styles.user}>
      <MdOutlineCastConnected size="20px" color="white" href=''/>
      <Logo size="32px" alt='H' />
    </div>
  )
}