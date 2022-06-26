/* eslint-disable testing-library/prefer-screen-queries */
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
    }
  ]
}


test('Mostrar os textos do topo e a foto corretamente', async () => {
  const { getByText, getByAltText } = render(<Playlists data={data.data} title={data.title} />);
  
  expect(getByText(data.title)).toBeInTheDocument()

  expect(getByAltText(data.data[0].name)).toBeInTheDocument()
  expect(getByText(data.data[0].name)).toBeInTheDocument()
  expect(getByText(data.data[0].artists)).toBeInTheDocument()
});