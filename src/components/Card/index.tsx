import { StatistaItem } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import {
	ArrowLongRightIcon,
	HeartIcon as SolidBookmark,
} from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { ThemeContext } from "@/app/theme-provider";

type CardProps = {
	post: StatistaItem;
};

export default function Card({ post }: CardProps) {
	const { title, subject, identifier, teaser_image_urls } = post;
	const { isFavorite, setIsFavorite } = useContext(ThemeContext);
	const isBookmarked = isFavorite.includes(identifier);

	const handleBookmark = () => {
		if (isBookmarked) {
			setIsFavorite(isFavorite.filter((item) => item !== identifier));
		} else {
			setIsFavorite([...isFavorite, identifier]);
		}
	};

	return (
		<div className="w-full h-full flex flex-col lg:flex-row items-center border bg-white p-4 my-4 lg:m-4 shadow-md ">
			<div className="lg:w-2/12 mr-4">
				<Image
					src={teaser_image_urls[0].src}
					width={460}
					height={460}
					alt={`Image of ${title}`}
				/>
			</div>

			<div className="lg:w-9/12 h-full flex flex-col">
				<div className="text-stblack font-bold text-xl mb-2 mt-6 lg:mt-0">
					{title}
				</div>
				<p className="text-gray-700 text-base">{subject}</p>
				<Link
					href={`/statistics/${identifier}`}
					className="flex text-stblue bottom-0 mt-12 lg:mt-6 z-10"
				>
					<ArrowLongRightIcon className="w-6 h-6 mr-3" />
					More information
				</Link>
			</div>
			<div className="w-5/12 lg:w-1/12 flex justify-end items-start -mt-8 lg:mt-0 pr-6 lg:pr-0 ">
				<button onClick={handleBookmark} type="button">
					{isFavorite.includes(identifier) ? (
						<div className="flex flex-row lg:flex-col items-center">
							<SolidBookmark
								className="w-10 h-10 text-stblack"
								title="Favorited"
							/>
							<span>Favorited</span>
						</div>
					) : (
						<div className="flex flex-row lg:flex-col items-center">
							<HeartIcon
								className="w-10 h-10 text-stblack"
								title="Favorite it"
							/>
							<span>Favorite it!</span>
						</div>
					)}
				</button>
			</div>
		</div>
	);
}
