import { CgChevronLeftO, CgChevronRightO } from 'react-icons/cg';
import Logo from './Logo';
import styles from './styles.module.scss';

interface HeaderProps {
  text2?: string,
  text1: string,
  size?: string
}


export default function Top({ text2, text1, size }: HeaderProps) {
  return(
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        { size ? <Logo size={size} alt="H" /> : <></> }

        <div className={styles.headerText}>
          { text2 ? <h5>{text2}</h5> : <></> }
          <h6>{text1}</h6>
        </div>

      </div>
      <div className={styles.arrows}>
        <CgChevronLeftO size="40px" color="gray" />
        <CgChevronRightO size="40px" />
      </div>
    </div>
  )
}