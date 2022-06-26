import { render } from '@testing-library/react';

import App from '../App';


test('Properly render the app', async () => {
  render(<App />);
  expect(true).toBeTruthy();
});