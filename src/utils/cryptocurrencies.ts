import { CRYPTO_CURRENCY_CODES, CryptoCurrency, CryptoCurrencyType } from "../types/cryptocurrencies";
import { Currency } from "../types/currencies";

export function isCryptoCurrency(currency: Currency | CryptoCurrency): currency is CryptoCurrency {
  return CRYPTO_CURRENCY_CODES.includes(currency as CryptoCurrency);
}

export const Cryptocurrencies: CryptoCurrencyType = {
  BTC: { type: "crypto", name: "Bitcoin", symbol: "฿", decimal: ".", position: "pre" },
  ETH: { type: "crypto", name: "Ethereum", symbol: "Ξ", decimal: ".", position: "pre" },
  LTC: { type: "crypto", name: "Litecoin", symbol: "Ł", decimal: ".", position: "pre" },
  NANO: { type: "crypto", name: "Nano", symbol: "⋰·⋰", decimal: ".", position: "pre" }
};
