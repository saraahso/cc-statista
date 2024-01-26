"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

type CarouselImagesProps = {
	images: Array<{
		src: string;
		width?: number;
	}>;
};
export default function CarouselImages({ images }: CarouselImagesProps) {
	return (
		<Carousel>
			{images.map((image, index) => (
				<Image
					key={index}
					src={image.src}
					width={300}
					height={300}
					alt={`Image`}
					className="object-center"
				/>
			))}
		</Carousel>
	);
}
