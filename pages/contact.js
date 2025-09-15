import React from 'react';
import Contact from '../app/components/Contact';
import NavBar from '../app/components/NavBar';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | The Little Yorkshire Pottery</title>
      </Head>
      <main>
        <NavBar />
        <Contact />
      </main>
    </>
  );
}
