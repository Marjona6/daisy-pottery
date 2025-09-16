import React from 'react';
import NavBar from '../app/components/NavBar';
import PageBody from '../app/components/atoms/PageBody';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Modal = dynamic(() => import('../app/components/Modal'), { ssr: false });
const ChevronLeft = dynamic(() => import('react-feather').then((m) => m.ChevronLeft), {
  ssr: false,
});
const ChevronRight = dynamic(() => import('react-feather').then((m) => m.ChevronRight), {
  ssr: false,
});

export default function Gallery({ images = [] }) {
  const [showModal, setShowModal] = React.useState(null);
  const [visibleCount, setVisibleCount] = React.useState(6);
  const sentinelRef = React.useRef(null);

  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((c) => Math.min(c + 8, images.length));
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [images.length]);

  const moveThroughImageArray = (currentImage, direction) => {
    const index = images.indexOf(currentImage);
    if (index === -1) return;
    if (direction === 'left') {
      setShowModal(index === 0 ? images[images.length - 1] : images[index - 1]);
    } else if (direction === 'right') {
      setShowModal(index === images.length - 1 ? images[0] : images[index + 1]);
    }
  };
  return (
    <>
      <Head>
        <title>Gallery | The Little Yorkshire Pottery</title>
      </Head>
      <main>
        <NavBar />
        <PageBody>
          <div className="container mx-auto flex px-10 py-20 flex-col items-center">
            <Head>
              {images?.[0] && (
                <link rel="preload" as="image" href={images[0]} fetchpriority="high" />
              )}
            </Head>
            <h2 className="title-font sm:text-4xl text-3xl mb-4 text-center font-medium text-prussian-blue">
              Gallery
            </h2>
            <div className="flex flex-wrap mt-4">
              {images.slice(0, visibleCount).map((image, index) => (
                <div
                  className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-wrap"
                  key={image}
                >
                  <div className="w-full p-1 md:p-2">
                    <Image
                      alt={`Pottery image ${index + 1}`}
                      className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                      width={400}
                      height={400}
                      src={image}
                      placeholder="empty"
                      quality={index === 0 ? 35 : 28}
                      sizes="(min-width:1280px) 20vw, (min-width:1024px) 25vw, (min-width:768px) 33vw, (min-width:640px) 50vw, 100vw"
                      priority={index === 0}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      onClick={() => setShowModal(image)}
                    />
                  </div>
                </div>
              ))}
              <div ref={sentinelRef} className="h-1 w-full" />
            </div>
          </div>
        </PageBody>
        {showModal && (
          <Modal
            showModal={showModal}
            handleClose={() => setShowModal(null)}
            modalContent={
              <div className="relative flex items-center justify-center w-screen h-[100svh]">
                <div
                  className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-black/40 text-white rounded-full cursor-pointer p-2"
                  onClick={() => moveThroughImageArray(showModal, 'left')}
                >
                  <ChevronLeft height={24} />
                </div>
                <Image
                  src={showModal}
                  alt="Selected pottery image"
                  height={600}
                  width={800}
                  className="w-screen h-[100svh] object-contain"
                  quality={60}
                  priority
                  fetchPriority="high"
                  loading="eager"
                />
                <div
                  className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-black/40 text-white rounded-full cursor-pointer p-2"
                  onClick={() => moveThroughImageArray(showModal, 'right')}
                >
                  <ChevronRight height={24} />
                </div>
              </div>
            }
          />
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const fs = await import('fs');
  const path = await import('path');
  const imagesDir = path.join(process.cwd(), 'public', 'img', 'min');
  let images = [];
  try {
    const files = fs
      .readdirSync(imagesDir)
      .filter((name) => /\.(?:jpe?g|png|webp|avif)$/i.test(name))
      .sort();
    images = files.map((name) => `/img/min/${name}`);
  } catch (e) {
    console.error(e);
  }
  return { props: { images } };
}
