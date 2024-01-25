export async function GET() {
	const res = await fetch(
		"https://cdn.statcdn.com/static/application/search_results.json",
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	const data = await res.json();

	return Response.json(data);
}
