import { forYou } from "./services/musics";
import { hits, energeticas, acusticos } from './services/playlists';

import Header from './components/Header';
import Playlists from './components/Playlists';
import Musics from './components/Musics';
import './styles/global.scss';


export default function App() {
  return (
    <>
      <Header />

      <Musics
        data={forYou.data}
        text1={forYou.text1}
        text2={forYou.text2}
      />
      
      <Playlists
        title={hits.title}
        data={hits.data}
      />
      
      <Playlists
        title={energeticas.title}
        data={energeticas.data}
      />
      
      <Playlists
        title={acusticos.title}
        data={acusticos.data}
      />
    </>
  )
}