import React from 'react';
import NavBar from '../app/components/NavBar';
import PageBody from '../app/components/atoms/PageBody';

const facebookUrl = 'https://www.facebook.com/profile.php?id=61554541169488';

export default function Shop() {
  return (
    <main>
      <NavBar />
      <PageBody>
        <div className="container mx-auto flex flex-col px-10 py-20 items-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 text-center font-medium text-prussian-blue">
            Shop
          </h2>
          <p className="mt-4 mb-4">Coming soon!</p>
        </div>
      </PageBody>
    </main>
  );
}
