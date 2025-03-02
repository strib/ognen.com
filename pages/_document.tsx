import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A humorous and interactive personal website of Ognen Stojanovski" />
        <link rel="icon" href="/favicon.ico" />
        <title>Ognen Stojanovski - Definitely Not Your Average Website</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 