import { render } from '@testing-library/react';

import Top from '../../components/Top';


test('Renderiza o App corretamente', async () => {
  render(<Top text2='teste' size='80px' />);
  expect(true).toBeTruthy();
});