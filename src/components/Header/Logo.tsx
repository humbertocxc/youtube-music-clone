import styles from './styles.module.scss';


export default function Logo() {
  return(
    <a className={styles.logo} href="/" >
      <img src="imgs/header/logo.svg" alt="YTMusic" />
    </a>
  )
}