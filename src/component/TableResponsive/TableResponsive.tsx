import React, { useState, useEffect, FC } from "react";

interface Currency {
  base: string;
  currencyCode: string;
  purchase: number;
  selling: number;
}

const getCurrency = async (): Promise<Currency[]> => {
  const currencyData = await fetch(
    "http://data.fixer.io/api/latest?access_key=466ae5e07c5a928010f5edb9ac0bb8c8"
  );
  const currency = await currencyData.json();
  const rates = currency.rates;

  // Extract base currency from the API response
  const baseCurrency = currency.base;

  // Filter currencies to include only euros, pounds, dollars, and yen
  const filteredCurrencyArray = Object.entries(rates as number)
    .filter(([currencyCode]) =>
      ["EUR", "GBP", "USD", "JPY"].includes(currencyCode)
    )
    .map(([currencyCode, rate]) => {
      return {
        base: baseCurrency as string,
        currencyCode,
        purchase: parseFloat(rate.toFixed(3)),
        selling: parseFloat(rate + 0.05),
      };
    });

  return filteredCurrencyArray;
};

const TableResponsive: FC = () => {
  const [currency, setCurrency] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrency = async () => {
      const fetchedCurrency = await getCurrency();
      setCurrency(fetchedCurrency);
    };

    fetchCurrency();
  }, []);

  if (!currency || currency.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8 w-full">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Currency Code</th>
            <th className="py-2 px-4 border-b">Purchase</th>
            <th className="py-2 px-4 border-b">Selling</th>
          </tr>
        </thead>
        <tbody>
          {currency.map((currencyItem) => (
            <tr key={currencyItem.currencyCode}>
              <td className="py-6 px-4 border-b text-center font-bold">
                {currencyItem.currencyCode}
              </td>
              <td className="py-6 px-4 border-b text-center">
                {currencyItem.purchase.toFixed(3)}
              </td>
              <td className="py-6 px-4 border-b text-center">
                {currencyItem.selling.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableResponsive;
