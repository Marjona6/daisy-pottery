import React from "react";
import NavBar from "../app/components/NavBar";
import PageBody from "../app/components/atoms/PageBody";
import Image from "next/image";

export default function Gallery() {
  return (
    <main>
      <NavBar />
      <PageBody>
        <h2>Gallery</h2>
        <Image src="/daisy1.jpeg" alt="pottery" height={400} width={400} />
        <Image src="/daisy2.jpeg" alt="pottery" height={400} width={400} />
        <Image src="/daisy3.jpeg" alt="pottery" height={400} width={400} />
      </PageBody>
    </main>
  );
}
