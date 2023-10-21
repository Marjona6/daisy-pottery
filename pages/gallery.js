import React from "react";
import NavBar from "../app/components/NavBar";
import PageBody from "../app/components/atoms/PageBody";
import Image from "next/image";
import Modal from "../app/components/Modal";
import { ChevronLeft, ChevronRight } from "react-feather";

const images = ["/daisy1.jpeg", "/daisy2.jpeg", "/daisy3.jpeg"];

export default function Gallery() {
  const [showModal, setShowModal] = React.useState(null);

  const moveThroughImageArray = (currentImage, direction) => {
    const index = images.indexOf(currentImage);
    let imageToReturn = null;
    if (direction === "left") {
      imageToReturn = index === 0 ? images[images.length - 1] : images[index - 1];
    } else if (direction === "right") {
      imageToReturn = index === images.length - 1 ? images[0] : images[index + 1];
    }
    setShowModal(imageToReturn);
  };
  return (
    <main>
      <NavBar />
      <PageBody>
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Gallery</h2>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="-m-1 flex flex-wrap md:-m-2">
            {images.map((image) => (
              <div class="flex w-1/3 flex-wrap" key={image}>
                <div class="w-full p-1 md:p-2">
                  <Image alt={image} class="block h-full w-full rounded-lg object-cover object-center cursor-pointer" width={400} height={400} src={image} onClick={() => setShowModal(image)} />
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
            <div className="flex">
              <div className="text-oxford-blue absolute top-[50%] left-[12px] text-md z-999 bg-bisque/70 rounded-full cursor-pointer p-2" onClick={() => moveThroughImageArray(showModal, "left")}>
                <ChevronLeft height={24} />
              </div>
              <Image src={showModal} alt={showModal} height={600} width={800} />
              <div className="text-oxford-blue absolute top-[50%] right-[12px] text-md z-999 bg-bisque/70 rounded-full cursor-pointer p-2" onClick={() => moveThroughImageArray(showModal, "right")}>
                <ChevronRight height={24} />
              </div>
            </div>
          ) : null
        }
      />
    </main>
  );
}
