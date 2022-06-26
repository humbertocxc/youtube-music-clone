import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { MdExplore, MdOutlineLibraryMusic } from 'react-icons/md';
import { SiYoutubemusic } from 'react-icons/si';

import styles from './styles.module.scss';


export default function Icons() {
  return(
    <nav className={styles.icons} >
      <AiFillHome />
      <MdExplore />
      <MdOutlineLibraryMusic />
      <SiYoutubemusic />
      <AiOutlineSearch />
    </nav>
  )
}