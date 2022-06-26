/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';

import Top from '../../components/Top';


test('Renderiza o App corretamente', async () => {
  const text = 'teste'

  const { getByText } = render(<Top text2={text} size='80px' />);
  
  expect(getByText(text)).toBeInTheDocument();
});