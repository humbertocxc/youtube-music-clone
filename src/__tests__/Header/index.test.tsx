/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';

import Header from '../../components/Header';


test('Chama os ítens esperados do header', async () => {
  const { getByText, getByAltText } = render(<Header />);

  expect(getByText('Início')).toBeInTheDocument();
  expect(getByText('Explorar')).toBeInTheDocument();
  expect(getByText('Biblioteca')).toBeInTheDocument();
  expect(getByText('Upgrade')).toBeInTheDocument();

  expect(getByAltText('H')).toBeInTheDocument();
  expect(getByAltText('YTMusic')).toBeInTheDocument();
});