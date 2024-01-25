"use client";

import { useEffect, useContext } from "react";
import Card from "../Card";
import { useQuery } from "@tanstack/react-query";
import { StatistaItem } from "@/lib/types";
import { getStatistaData } from "@/lib/statista";
import { ThemeContext } from "@/app/theme-provider";

export default function CardsList() {
	const { query, buttonSearch } = useContext(ThemeContext);
	const { data, refetch } = useQuery<StatistaItem[]>({
		queryKey: ["statista"],
		queryFn: () => getStatistaData(),
	});
	const totalPages = 5;

	useEffect(() => {
		if (buttonSearch) {
			refetch();
		}
	}, [query, refetch]);

	return (
		<section className="container mx-auto">
			{data && buttonSearch ? (
				data.map((item) => <Card key={item.identifier} post={item} />)
			) : (
				<p className="text-center text-2xl text-stblack border p-4 m-4 shadow-md">
					No search results. Try again with "statista".
				</p>
			)}
		</section>
	);
}
