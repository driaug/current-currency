export const CURRENCY_CODES = [
  "EUR",
  "USD",
  "CAD",
  "HKD",
  "ISK",
  "PHP",
  "DDK",
  "HUF",
  "CZK",
  "AUD",
  "RON",
  "SEK",
  "IDR",
  "INR",
  "BRL",
  "RUB",
  "HRK",
  "JPY",
  "TBH",
  "CHF",
  "SGD",
  "PLN",
  "BGN",
  "TRY",
  "CNY",
  "NOK",
  "NZD",
  "ZAR",
  "MXN",
  "ILS",
  "GBP",
  "KRW",
  "MYR",
] as const;

export type Currency = typeof CURRENCY_CODES[number];

export type CurrencyType = {
  [key in Currency]: {
    type: "currency";
    name: string;
    symbol: string;
    decimal: string;
    position: "pre" | "post";
  };
};
