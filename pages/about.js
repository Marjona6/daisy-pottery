import React from 'react';
import About from '../app/components/About';
import NavBar from '../app/components/NavBar';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | The Little Yorkshire Pottery</title>
      </Head>

      <main>
        <NavBar />
        <About />
      </main>
    </>
  );
}
