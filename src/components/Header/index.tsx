import { useMediaQuery } from 'react-responsive';

import Logo from './Logo';
import Pages from './Pages';
import User from './User';
import styles from './styles.module.scss';
import Icons from './Icons';


export default function Header() {
  const showIcons = useMediaQuery({query: '(max-width: 936px)'})

  return(
    <div className={styles.headerContainer}>
      <Logo />
      {showIcons ? <Icons /> : <Pages />}
      <User />
    </div>
  )
}