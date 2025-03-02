import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f0f0f0',
        color: '#2D3748'
      }
    }
  },
  fonts: {
    heading: 'system-ui, sans-serif',
    body: 'system-ui, sans-serif',
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ognen Stojanovski - Definitely Not Your Average Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A humorous and interactive personal website of Ognen Stojanovski" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp; 