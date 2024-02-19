import React from 'react';
import NavBar from '../app/components/NavBar';
import PageBody from '../app/components/atoms/PageBody';

const facebookUrl = 'https://www.facebook.com/profile.php?id=61554541169488';

export default function Shop() {
  return (
    <main>
      <NavBar />
      <PageBody>
        Visit{' '}
        <a
          href={facebookUrl}
          alt="The Little Yorkshire Pottery - Facebook"
          className="text-verdigris"
        >
          The Little Yorkshire Pottery
        </a>
        &apos;s shop on Facebook!
      </PageBody>
    </main>
  );
}
