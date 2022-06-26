/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';

import Playlist from '../../components/Playlists/Playlist';


test('Mostrar os textos do topo e a foto corretamente', async () => {
  const name = 'Teste';
  const artists = 'teste1 & teste2';
  const { getByText, getByAltText } = render(<Playlist name={name} artists={artists} img="" />);
  
  expect(getByText(name)).toBeInTheDocument()
  expect(getByText(artists)).toBeInTheDocument()
  expect(getByAltText(name)).toBeInTheDocument()
});