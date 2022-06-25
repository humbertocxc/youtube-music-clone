import Header from '../Utils/Header';
import Playlist, { PlaylistProps } from './Playlist';
import styles from './styles.module.scss';

interface PlaylistsProps {
  title: string,
  data: PlaylistProps[],
}


export default function Playlists({ title, data }: PlaylistsProps) {
  return(
    <div className={styles.container} >
      <Header text2={title} />
      <div className={styles.content} >
        {
          data.map(item =>
            <Playlist
              artists={item.artists}
              name={item.name}
              img={item.img}
            />
          )
        }
      </div>
    </div>
  )
}