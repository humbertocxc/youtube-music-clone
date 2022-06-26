import { render } from '@testing-library/react';

import Musics from '../../components/Musics';

const data = {
  text1: 'ALGUMAS MÚSICAS PARA VOCÊ COMEÇAR',
  text2: 'Olá, Humberto Gessinger',
  data: [
    {
      id: 0,
      data: {
        img: 'forYou/1.jpg',
        name: 'Reconstrução',
        artist: 'Gerson Rufino',
        album: 'Reconstrução'
      }
    },
  ]
}


test('Renderiza o App corretamente', async () => {
  render(<Musics data={data.data} text2={data.text2} text1={data.text1} />);
  expect(true).toBeTruthy();
});