import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import TopComponent from '../component/TopComponent';

function MyApp({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
    <TopComponent/>
    <Component {...pageProps} />
  </RecoilRoot>;
}

export default MyApp
