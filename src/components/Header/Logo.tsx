import { useMediaQuery } from 'react-responsive';

import styles from './styles.module.scss';


export default function Logo() {
  const smallIcon = useMediaQuery({query: '(max-width: 650px)'})
  return(
    <a className={styles.logo} href="/" >
      {smallIcon
        ? <img src="imgs/logo.svg" alt="YTMusic" />
        : <img src="imgs/header/logo.svg" alt="YTMusic" />
      }
    </a>
  )
}