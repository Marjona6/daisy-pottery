import React from 'react';
import NavBar from '../app/components/NavBar';
import PageBody from '../app/components/atoms/PageBody';
import './globals.css';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';

export default function MainPage() {
  return (
    <main>
      <NavBar />
      <div
        className="fixed w-screen h-screen bg-cover h-min-100vh"
        style={{
          backgroundImage: `url('/daisy4.jpeg')`,
          height: '100%',
          minHeight: '100vh',
        }}
      >
        <PageBody>
          <div className="flex w-full items-center justify-center content-center">
            {/* <Image src="/logo.svg" alt="The Little Yorkshire Pottery" width={400} height={400} /> */}
          </div>
        </PageBody>
      </div>
    </main>
  );
}
