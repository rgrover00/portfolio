import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {GoogleTagManager} from '@next/third-parties/google';
import type {AppProps} from 'next/app';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <GoogleTagManager gtmId="GTM-TT5TBJP4" />
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;