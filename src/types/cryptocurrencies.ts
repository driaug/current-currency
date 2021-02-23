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
