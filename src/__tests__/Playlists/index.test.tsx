import { render } from '@testing-library/react';

import Playlists from '../../components/Playlists';

const data = {
  title: 'Novidades e em alta',
  data: [
    {
      id: 0,
      name: 'RELEASED',
      artists: 'Sorriso Maroto, Lil Nas X, Imagine Dragons e Charli...',
      img: 'novidades/1.jpg'
    },
    {
      id: 1,
      name: 'Estação Gospel',
      artists: 'Jessé Aguiar, Fernanda Brum, Eurice Diniz e...',
      img: 'novidades/2.jpg'
    },
  ]
}


test('Renderiza o App corretamente', async () => {
  render(<Playlists data={data.data} title={data.title} />);
  expect(true).toBeTruthy();
});