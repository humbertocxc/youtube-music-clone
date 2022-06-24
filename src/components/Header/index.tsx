import Logo from './Logo';
import Pages from './Pages';
import User from './User';
import styles from './styles.module.scss';


export default function Header() {
  return(
    <div className={styles.headerContainer}>
      <Logo />
      <Pages />
      <User />
    </div>
  )
}