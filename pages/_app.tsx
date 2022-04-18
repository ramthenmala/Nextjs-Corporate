import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import FullMenu from '../components/FullMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />

      <FullMenu />
    </>
  );
}

export default MyApp;
