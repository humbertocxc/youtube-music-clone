import { MdOutlineCastConnected } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from './styles.module.scss';
import Logo from '../Top/Logo';


export default function User() {
  const teste = false
  return(
    <div className={styles.user}>
      <MdOutlineCastConnected size="20px" color="white" href=''/>
      
      {
        teste ? <BsThreeDotsVertical size="20px" color="white" href='' /> : <></>
      }

      <Logo size="32px" />
    </div>
  )
}