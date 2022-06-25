import { topMusics } from "./services/topMusics";
import { hits } from './services/playlists';

import Header from './components/Header';
import Playlists from './components/Playlists';
import Top from './components/Top';
import './styles/global.scss';


export default function App() {
  return (
    <>
      <Header />

      <Top
        data={topMusics.data}
        text1={topMusics.text1}
        text2={topMusics.text2}
      />
      
      <Playlists
        title={hits.title}
        data={hits.data}
      />
      
      <Playlists
        title={hits.title}
        data={hits.data}
      />
    </>
  )
}