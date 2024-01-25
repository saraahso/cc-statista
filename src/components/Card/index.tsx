import { StatistaItem } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

type CardProps = {
	post: StatistaItem;
};

export default function Card({ post }: CardProps) {
	const { title, subject, image_url, teaser_image_urls } = post;

	return (
		<div className="flex border bg-white p-4 m-4 shadow-md ">
			<div className="mr-4">
				<Image
					src={teaser_image_urls[0].src}
					width={200}
					height={200}
					alt={`Image of ${title}`}
				/>
			</div>

			<div className="flex flex-col relative">
				<div className="text-stblack font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">{subject}</p>
				<Link href="#" className="flex text-stblue bottom-0 absolute">
					<ArrowLongRightIcon className="w-6 h-6 mr-3" />
					More information
				</Link>
			</div>
		</div>
	);
}
