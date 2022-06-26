import styles from './styles.module.scss';
import { BsDot } from 'react-icons/bs';
import { IoIosRadio } from 'react-icons/io';


export interface MusicProps {
  id: number,
  data: {
    img: string,
    name: string,
    artist: string,
    album: string,
  }
}

export default function Item({ data }: MusicProps) {
  return(
    <div className={styles.item} >
      <img src={`imgs/musics/${data.img}`} alt={data.album} />
      <div className={styles.topText}>
        <h3>{data.name}</h3>
        <div className={styles.bottomText}>
          <IoIosRadio />
          <h4>{data.artist}</h4>
          <BsDot />
          <h5>{data.album}</h5>
        </div>
      </div>
    </div>
  )
}