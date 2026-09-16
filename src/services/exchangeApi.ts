export async function getRates(base: string) {
  const response = await fetch(
    `https://open.er-api.com/v6/latest/${base}`
  );

  const data = await response.json();

  return data.rates;
}