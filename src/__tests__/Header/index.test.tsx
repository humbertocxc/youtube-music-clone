import { render } from '@testing-library/react';

import Header from '../../components/Header';


test('Renderiza o App corretamente', async () => {
  render(<Header />);
  expect(true).toBeTruthy();
});