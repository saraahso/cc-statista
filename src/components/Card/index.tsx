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
		<div className="w-full flex border bg-white p-4 m-4 shadow-md ">
			<div className="w-2/12 mr-4">
				<Image
					src={teaser_image_urls[0].src}
					width={200}
					height={200}
					alt={`Image of ${title}`}
				/>
			</div>

			<div className="w-9/12 flex flex-col relative">
				<div className="text-stblack font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">{subject}</p>
				<Link
					href={`/statistics/${identifier}`}
					className="flex text-stblue bottom-0 absolute"
				>
					<ArrowLongRightIcon className="w-6 h-6 mr-3" />
					More information
				</Link>
			</div>
			<div className="w-1/12 flex justify-end items-start">
				<button onClick={handleBookmark} type="button">
					{isFavorite.includes(identifier) ? (
						<SolidBookmark
							className="w-10 h-10 text-stblack"
							title="Favorited"
						/>
					) : (
						<HeartIcon className="w-10 h-10 text-stblack" title="Favorite it" />
					)}
				</button>
			</div>
		</div>
	);
}
