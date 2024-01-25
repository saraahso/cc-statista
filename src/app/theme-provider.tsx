"use client";

import { createContext, useState } from "react";

const initialState: ThemeContextType = {
	query: "",
	setQuery: () => {},
	buttonSearch: false,
	setButtonSearch: () => {},
};

export type ThemeContextType = {
	query: string;
	setQuery: (searchQuery: string) => void;
	buttonSearch: boolean;
	setButtonSearch: (buttonSearch: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [query, setQuery] = useState("");
	const [buttonSearch, setButtonSearch] = useState(false);

	return (
		<ThemeContext.Provider
			value={{ query, setQuery, buttonSearch, setButtonSearch }}
		>
			{children}
		</ThemeContext.Provider>
	);
}
