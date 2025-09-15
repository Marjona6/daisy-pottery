import React from 'react';
import NavBar from '../app/components/NavBar';
import PageBody from '../app/components/atoms/PageBody';
import Image from 'next/image';
import Modal from '../app/components/Modal';
import { ChevronLeft, ChevronRight } from 'react-feather';
import * as img from '../public/img';
import Head from 'next/head';

const images = Object.values(img);

export default function Gallery() {
  const [showModal, setShowModal] = React.useState(null);

  const moveThroughImageArray = (currentImage, direction) => {
    const index = images.indexOf(currentImage);
    let imageToReturn = null;
    if (direction === 'left') {
      imageToReturn = index === 0 ? images[images.length - 1] : images[index - 1];
    } else if (direction === 'right') {
      imageToReturn = index === images.length - 1 ? images[0] : images[index + 1];
    }
    setShowModal(imageToReturn);
  };
  return (
    <>
      <Head>
        <title>Gallery | The Little Yorkshire Pottery</title>
      </Head>
      <main>
        <NavBar />
        <PageBody>
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-oxford-blue">
              Gallery
            </h2>
            <div className="-m-1 flex flex-wrap md:-m-2">
              {images.map((image, index) => (
                <div
                  className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-wrap"
                  key={image.src}
                >
                  <div className="w-full p-1 md:p-2">
                    <Image
                      alt={image}
                      className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                      width={400}
                      height={400}
                      src={image.src}
                      quality={30}
                      onClick={() => setShowModal(image)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageBody>
        <Modal
          showModal={showModal}
          handleClose={() => setShowModal(null)}
          modalContent={
            showModal ? (
              <div className="relative flex items-center justify-center w-screen h-[100svh]">
                <div
                  className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-black/40 text-white rounded-full cursor-pointer p-2"
                  onClick={() => moveThroughImageArray(showModal, 'left')}
                >
                  <ChevronLeft height={24} />
                </div>
                <Image
                  src={showModal}
                  alt={showModal}
                  height={600}
                  width={800}
                  className="w-screen h-[100svh] object-contain"
                  quality={60}
                />
                <div
                  className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-black/40 text-white rounded-full cursor-pointer p-2"
                  onClick={() => moveThroughImageArray(showModal, 'right')}
                >
                  <ChevronRight height={24} />
                </div>
              </div>
            ) : null
          }
        />
      </main>
    </>
  );
}
