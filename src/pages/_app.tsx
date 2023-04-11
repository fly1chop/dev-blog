import Layout from '@/components/layout/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
