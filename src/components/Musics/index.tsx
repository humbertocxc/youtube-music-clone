import styles from './styles.module.scss';
import Item from "./Item";
import Top from "../Utils/Top";
import { MusicProps } from './Item';

interface Props {
  text1: string,
  text2: string,
  data: MusicProps[]
}


export default function Musics({ data, text1, text2 }: Props) {
  return (
    <div className={styles.container} >
      <Top text1={text1} text2={text2} size="58px" />
      <div className={styles.content} >
        {
          data.map(item => <Item key={item.id} id={item.id} data={item.data} />)
        }
      </div>
    </div>
  )
}