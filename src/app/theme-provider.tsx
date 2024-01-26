"use client";

import { createContext, useState } from "react";

const initialState: ThemeContextType = {
	buttonSearch: false,
	setButtonSearch: () => {},
	isFavorite: [],
	setIsFavorite: () => {},
};

export type ThemeContextType = {
	buttonSearch: boolean;
	setButtonSearch: (buttonSearch: boolean) => void;
	isFavorite: Array<number>;
	setIsFavorite: (isFavorite: Array<number>) => void;
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [buttonSearch, setButtonSearch] = useState(false);
	const [isFavorite, setIsFavorite] = useState<number[]>([]);

	return (
		<ThemeContext.Provider
			value={{ buttonSearch, setButtonSearch, isFavorite, setIsFavorite }}
		>
			{children}
		</ThemeContext.Provider>
	);
}
