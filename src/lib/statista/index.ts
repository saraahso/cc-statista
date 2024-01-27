export async function getStatistaDataClient() {
  const res = await fetch('/api/search');
  const data = await res.json();

  return data.items;
}

export async function getStatistaDataServer() {
  const res = await fetch(
    'https://cdn.statcdn.com/static/application/search_results.json'
  );
  const data = await res.json();

  return data.items;
}
