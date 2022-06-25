import { render } from '@testing-library/react';

import App from '../App';


test('Renderiza o App corretamente', async () => {
  render(<App />);
  expect(true).toBeTruthy();
});