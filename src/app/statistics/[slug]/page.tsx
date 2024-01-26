import CarouselImages from "@/components/Carousel";
import { getStatistaDataServer } from "@/lib/statista";
import { StatistaItem } from "@/lib/types";

export default async function DetailPage({
	params,
}: {
	params: { slug: string };
}) {
	const data = await getStatistaDataServer();
	const article = data.find(
		(item: StatistaItem) => item.identifier.toString() === params.slug
	);
	const { title, subject, description, date, teaser_image_urls } = article;
	return (
		<div className="container flex flex-col lg:flex-row mx-auto my-20">
			<div className="lg:w-7/12 h-96 flex flex-col order-2 lg:order-1">
				<h1 className="text-5xl font-semibold">{title}</h1>
				<h2 className="mt-6 text-3xl font-medium">{subject}</h2>
				<p className="mt-3 text-xl font-medium">{date}</p>
				<p className="mt-6 text-base">{description}</p>
			</div>
			<div className="lg:w-5/12 order-1 lg:order-2">
				<CarouselImages images={teaser_image_urls} />
			</div>
		</div>
	);
}
