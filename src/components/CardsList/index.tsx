"use client";

import { useEffect, useContext } from "react";
import Card from "../Card";
import { useQuery } from "@tanstack/react-query";
import { StatistaItem } from "@/lib/types";
import { getStatistaData } from "@/lib/statista";
import { ThemeContext } from "@/app/theme-provider";

export default function CardsList() {
	const { query, setQuery } = useContext(ThemeContext);
	const { data, refetch } = useQuery<StatistaItem[]>({
		queryKey: ["statista"],
		queryFn: () => getStatistaData(),
	});

	useEffect(() => {
		if (query.toLowerCase() === "statista") {
			refetch();
		}
	}, [query, refetch]);

	return (
		<section className="w-full h-full">
			{data && query.toLowerCase() === "statista"
				? data.map((item) => <Card key={item.identifier} post={item} />)
				: "Nothing to show"}
		</section>
	);
}
