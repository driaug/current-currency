export type CurrencyCodes =
  | "EUR"
  | "USD"
  | "CAD"
  | "HKD"
  | "ISK"
  | "PHP"
  | "DDK"
  | "HUF"
  | "CZK"
  | "AUD"
  | "RON"
  | "SEK"
  | "IDR"
  | "INR"
  | "BRL"
  | "RUB"
  | "HRK"
  | "JPY"
  | "TBH"
  | "CHF"
  | "SGD"
  | "PLN"
  | "BGN"
  | "TRY"
  | "CNY"
  | "NOK"
  | "NZD"
  | "ZAR"
  | "MXN"
  | "ILS"
  | "GBP"
  | "KRW"
  | "MYR";

type CurrencyType = {
  [key in CurrencyCodes]: {
    symbol: string;
    position: "pre" | "post";
  };
};

export const Currencies: CurrencyType = {
  EUR: { symbol: "€", position: "pre" },
  USD: { symbol: "$", position: "pre" },
  CAD: { symbol: "$", position: "pre" },
  HKD: { symbol: "$", position: "pre" },
  ISK: { symbol: "kr", position: "pre" },
  PHP: { symbol: "₱", position: "pre" },
  DDK: { symbol: "kr.", position: "pre" },
  HUF: { symbol: "Ft", position: "pre" },
  CZK: { symbol: "Kč", position: "pre" },
  AUD: { symbol: "$", position: "pre" },
  RON: { symbol: "L", position: "pre" },
  SEK: { symbol: "kr", position: "pre" },
  IDR: { symbol: "Rp", position: "pre" },
  INR: { symbol: "₹", position: "pre" },
  BRL: { symbol: "R$", position: "pre" },
  RUB: { symbol: "₽", position: "pre" },
  HRK: { symbol: "kn", position: "pre" },
  JPY: { symbol: "¥", position: "pre" },
  TBH: { symbol: "฿", position: "pre" },
  CHF: { symbol: "Fr.", position: "pre" },
  SGD: { symbol: "$", position: "pre" },
  PLN: { symbol: "zł", position: "pre" },
  BGN: { symbol: "Лв.", position: "pre" },
  TRY: { symbol: "₺", position: "pre" },
  CNY: { symbol: "¥", position: "pre" },
  NOK: { symbol: "kr", position: "pre" },
  NZD: { symbol: "$", position: "pre" },
  ZAR: { symbol: "R", position: "pre" },
  MXN: { symbol: "$", position: "pre" },
  ILS: { symbol: "₪", position: "pre" },
  GBP: { symbol: "£", position: "pre" },
  KRW: { symbol: "₩", position: "pre" },
  MYR: { symbol: "RM", position: "pre" },
};
