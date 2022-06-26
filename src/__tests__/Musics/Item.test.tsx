/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';

import Item from '../../components/Musics/Item';

const data = {
  img: 'forYou/1.jpg',
  name: 'Reconstrucao',
  artist: 'Gerson Rufino',
  album: 'Reconstrucao'
}


test('Imagem recebida corretamente', async () => {
  const { getByAltText } = render(
    <Item data={data} id={0} />
  );

  expect(getByAltText(data.album)).toBeInTheDocument()
});