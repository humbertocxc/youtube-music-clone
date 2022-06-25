import { topMusics } from "../../services/topMusics";
import styles from './styles.module.scss';
import Item from "./Item";
import Header from "./Header";


export default function Top() {
  return (
    <div className={styles.container} >
      <Header />
      <div className={styles.content} >
        {
          topMusics.map(item => <Item key={item.id} id={item.id} data={item.data} />)
        }
      </div>
    </div>
  )
}