"use client";

import { createContext, useState } from "react";

const initialState: ThemeContextType = {
	query: "",
	setQuery: () => {},
};

export type ThemeContextType = {
	query: string;
	setQuery: (searchQuery: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [query, setQuery] = useState("");

	return (
		<ThemeContext.Provider value={{ query, setQuery }}>
			{children}
		</ThemeContext.Provider>
	);
}
