import { Currency, CURRENCY_CODES } from "./currencies";

export function isCryptoCurrency(currency: Currency | CryptoCurrency): currency is CryptoCurrency {
  return CRYPTO_CURRENCY_CODES.includes(currency as CryptoCurrency);
}

export const CRYPTO_CURRENCY_CODES = ["BTC", "ETH", "LTC", "XRP", "DOGE"] as const;

export type CryptoCurrency = typeof CRYPTO_CURRENCY_CODES[number];

export type CryptoCurrencyType = {
  [key in CryptoCurrency]: {
    type: "crypto";
    name: string;
    symbol: string;
    decimal: string;
    position: "pre" | "post";
  };
};
