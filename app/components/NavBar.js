import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-clay md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="title-font font-medium hover:text-white text-prussian-blue mb-4 md:mb-0 hover:text-white"
        >
          The Little Yorkshire Pottery
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link href="/about" className="mr-5 hover:text-white">
            About
          </Link>
          <Link href="/gallery" className="mr-5 hover:text-white">
            Gallery
          </Link>
          <Link href="/contact" className="mr-5 hover:text-white">
            Contact
          </Link>
          <Link href="/shop" className="mr-5 hover:text-white">
            Shop
          </Link>
        </nav>
      </div>
    </header>
  );
}
