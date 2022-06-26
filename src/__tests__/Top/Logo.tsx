/* eslint-disable testing-library/no-debugging-utils */
import { render } from '@testing-library/react';

import Logo from '../../components/Top/Logo';


test('Open logo with the height argument', async () => {
  const size = '80px';
  
  const { debug } = render(
    <Logo size={size} />
  )

  debug()
});