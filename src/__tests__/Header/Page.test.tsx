/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';

import Page from '../../components/Header/Page';


test('Mostrar o texto correto', async () => {
  const name = 'Teste';
  const url = '';
  
  const { getByText } = render(
    <Page name={name} url={url} />
  );

  expect(getByText(name)).toBeInTheDocument();
});