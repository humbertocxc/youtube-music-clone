import { CgChevronLeftO, CgChevronRightO } from 'react-icons/cg';
import Logo from './Logo';
import styles from './styles.module.scss';

interface HeaderProps {
  text1?: string,
  text2: string,
  size?: string
}


export default function Top({ text1, text2, size }: HeaderProps) {
  return(
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        { size ? <Logo size={size} /> : <></> }

        <div className={styles.headerText}>
          { text1 ? <h5>{text1}</h5> : <></> }
          <h6>{text2}</h6>
        </div>

      </div>
      <div className={styles.arrows}>
        <CgChevronLeftO size="40px" color="gray" />
        <CgChevronRightO size="40px" />
      </div>
    </div>
  )
}