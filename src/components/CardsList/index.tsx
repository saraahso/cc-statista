import Card from "../Card";

import { StatistaItem } from "@/lib/types";

type CardListProps = {
	data: Array<StatistaItem> | undefined;
	text: string;
};

export default function CardsList({ data, text }: CardListProps) {
	return (
		<section className="container mx-auto">
			{data ? (
				data.map((item) => <Card key={item.identifier} post={item} />)
			) : (
				<p className="text-center text-2xl text-stblack border p-4 m-4 shadow-md">
					{text}
				</p>
			)}
		</section>
	);
}
