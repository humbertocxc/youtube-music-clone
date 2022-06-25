import styles from './styles.module.scss';
import { BsDot } from 'react-icons/bs';
import { IoIosRadio } from 'react-icons/io';


interface Top {
  id: number,
  data: {
    img: string,
    name: string,
    artist: string,
    album: string
  }
}

export default function Item({ id, data }: Top) {
  return(
    <div className={styles.item} >
      <img src={`imgs/top/${data.img}`} alt="" />
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