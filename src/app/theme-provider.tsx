"use client";

import { StatistaItem } from "@/lib/types";
import { createContext, useState } from "react";

const initialState: ThemeContextType = {
	searchResult: [],
	setSearchResult: () => {},
};

export type ThemeContextType = {
	searchResult: Array<StatistaItem>;
	setSearchResult: (searchQuery: Array<StatistaItem>) => void;
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [searchResult, setSearchResult] = useState<Array<StatistaItem>>([]);

	return (
		<ThemeContext.Provider value={{ searchResult, setSearchResult }}>
			{children}
		</ThemeContext.Provider>
	);
}
