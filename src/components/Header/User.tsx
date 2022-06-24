import { MdOutlineCastConnected } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from './styles.module.scss';
import Button from './Button';


export default function User() {
  return(
    <div className={styles.user}>
      <MdOutlineCastConnected size="20px" color="white" href=''/>
      
      <BsThreeDotsVertical size="20px" color="white" href='' />

      <Button />
    </div>
  )
}