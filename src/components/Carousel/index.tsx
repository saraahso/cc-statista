'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

type CarouselImagesProps = {
  images: Array<{
    src: string;
    width?: number;
  }>;
};

export default function CarouselImages({ images }: CarouselImagesProps) {
  return (
    <Carousel autoPlay>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          width={500}
          height={500}
          alt={`Image`}
          objectFit="contain"
          layout="responsive"
        />
      ))}
    </Carousel>
  );
}
