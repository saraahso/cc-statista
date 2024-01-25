export async function getStatistaData(isResult = false) {
	const res = await fetch("/api/search");
	const data = await res.json();

	return data.items;
}
