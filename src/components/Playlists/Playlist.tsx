import styles from './styles.module.scss';

export interface PlaylistProps {
  name: string,
  artists: string,
  img: string,
}


export default function Playlist({ name, artists, img }: PlaylistProps) {
  return(
    <div className={styles.item}>
      <img src={`imgs/playlists/hits/${img}`} alt={name} />
      <h2>{name}</h2>
      <h4>{artists}</h4>
    </div>
  )
}