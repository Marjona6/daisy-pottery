import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Little Yorkshire Pottery</title>
        <meta name="description" content="Artisanal hand-thrown pottery made in Yorkshire." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
