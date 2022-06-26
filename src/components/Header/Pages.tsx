import Page from './Page';
import styles from './styles.module.scss';


export default function Pages() {
  return(
    <nav className={styles.pages} >
      <Page name="Início" url="" />
      <Page name="Explorar" url="" />
      <Page name="Biblioteca" url="" />
      <Page name="Upgrade" url="" />
      <Page name="" url="" icon={true} />
    </nav>
  )
}