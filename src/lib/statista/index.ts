"use server";
export async function getStatistaData() {
	const response = await fetch("/api/search");
	const data = await response.json();

	return data;
}
