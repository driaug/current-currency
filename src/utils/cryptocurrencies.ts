import { CryptoCurrencyType } from "../types/cryptocurrencies";

export const Cryptocurrencies: CryptoCurrencyType = {
  BTC: { type: "crypto", name: "Bitcoin", symbol: "฿", decimal: ".", position: "pre" },
  ETH: { type: "crypto", name: "Ethereum", symbol: "Ξ", decimal: ".", position: "pre" },
  LTC: { type: "crypto", name: "Litecoin", symbol: "Ł", decimal: ".", position: "pre" },
  XRP: { type: "crypto", name: "Ripple", symbol: "XRP", decimal: ".", position: "post" },
  DOGE: { type: "crypto", name: "Dogecoin", symbol: "Ɖ", decimal: ".", position: "pre" },
};
