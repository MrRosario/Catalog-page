export async function fetcher(url: string, options = {}) {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  const data = await response.json();
  return data;
}

export const formatCurrency = (amount: number): string => {
  const locale = Intl.NumberFormat().resolvedOptions().locale;
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "USD",
    }).format(amount);
  } catch {
    return amount.toString();
  }
};

export const percentage = (percent: number, price: number) =>
  ((percent / 100) * price).toFixed(2);
