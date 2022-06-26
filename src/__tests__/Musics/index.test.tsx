/* eslint-disable testing-library/prefer-screen-queries */
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
        name: 'Reconstrucao',
        artist: 'Gerson Rufino',
        album: 'Reconstrucao'
      }
    },
  ]
}


test('Mostrar os textos do topo e a foto corretamente', async () => {
  const { getByText, getByAltText } = render(
    <Musics data={data.data} text2={data.text2} text1={data.text1} />
  );

  expect(getByText(data.text1)).toBeInTheDocument()
  expect(getByText(data.text2)).toBeInTheDocument()
  expect(getByAltText('H')).toBeInTheDocument()
});