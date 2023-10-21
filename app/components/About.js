import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">I&apos;m Daisy, and I make pottery by hand.</h1>
          <Image src="/daisy2.jpeg" alt="pot" width={400} height={400} />
          <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?</p>
        </div>
      </div>
    </section>
  );
}
