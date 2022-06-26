/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';

import Pages from '../../components/Header/Pages';


test('Listar as páginas', async () => {
  const { getByText } = render(<Pages />);

  expect(getByText('Início')).toBeInTheDocument();
  expect(getByText('Explorar')).toBeInTheDocument();
  expect(getByText('Biblioteca')).toBeInTheDocument();
  expect(getByText('Upgrade')).toBeInTheDocument();
});