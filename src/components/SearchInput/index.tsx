"use client";
import { ThemeContext } from "@/app/theme-provider";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function SearchInput() {
	const { query, setQuery } = useContext(ThemeContext);

	return (
		<div className="relative w-3/5 mt-12 shadow-sm">
			<input
				type="text"
				name="search"
				id="search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="block w-full h-14 rounded-md py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-white sm:text-sm sm:leading-6"
				placeholder="Find statistics, forecasts and reports"
			/>
			<div className="absolute flex items-center px-8 inset-y-0 right-0 bg-stblue text-white rounded-l-none rounded-r-md cursor-pointer">
				Statista Search{" "}
				<Image
					src="./search.svg"
					width={18}
					height={18}
					alt="Search Icon"
					className="ml-4"
				/>
			</div>
		</div>
	);
}
