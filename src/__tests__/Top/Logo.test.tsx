/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';

import Logo from '../../components/Top/Logo';


test('Renderiza o App corretamente', async () => {
  const alt = 'H';

  const { getByAltText } = render(<Logo size='80px' alt={alt} />);
  
  expect(getByAltText(alt)).toBeInTheDocument();
});