import { CgChevronLeftO, CgChevronRightO } from 'react-icons/cg';
import styles from './styles.module.scss';

interface HeaderProps {
  text1?: string,
  text2: string
}


export default function Header({ text1, text2 }: HeaderProps) {
  return(
    <div className={styles.header}>
      <div className={styles.headerText}>
        { text1 ? <h5>{text1}</h5> : <></> }
        <h6>{text2}</h6>
      </div>
      <div className={styles.buttons}>
        <CgChevronLeftO size="40px" color="gray" />
        <CgChevronRightO size="40px" />
      </div>
    </div>
  )
}