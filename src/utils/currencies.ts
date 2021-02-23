import { Currency, CURRENCY_CODES, CurrencyType } from "../types/currencies";
import { CryptoCurrency } from "../types/cryptocurrencies";

export function isCurrency(currency: Currency | CryptoCurrency): currency is Currency {
  return CURRENCY_CODES.includes(currency as Currency);
}

export const Currencies: CurrencyType = {
  EUR: { type: "currency", name: "Euro", symbol: "€", decimal: ",", position: "pre" },
  USD: { type: "currency", name: "United States dollar", symbol: "$", decimal: ".", position: "pre" },
  CAD: { type: "currency", name: "Canadian dollar", symbol: "$", decimal: ".", position: "pre" },
  HKD: { type: "currency", name: "Hong Kong dollar", symbol: "$", decimal: ".", position: "pre" },
  ISK: { type: "currency", name: "Icelandic króna", symbol: "kr", decimal: ",", position: "post" },
  PHP: { type: "currency", name: "Philippine peso", symbol: "₱", decimal: ".", position: "pre" },
  DDK: { type: "currency", name: "Danish krone", symbol: "kr.", decimal: ",", position: "post" },
  HUF: { type: "currency", name: "Hungarian forint", symbol: "Ft", decimal: ",", position: "post" },
  CZK: { type: "currency", name: "Czech koruna", symbol: "Kč", decimal: ",", position: "post" },
  AUD: { type: "currency", name: "Australian dollar", symbol: "$", decimal: ".", position: "pre" },
  RON: { type: "currency", name: "Romanian leu", symbol: "L", decimal: ",", position: "post" },
  SEK: { type: "currency", name: "Swedish krona", symbol: "kr", decimal: ",", position: "post" },
  IDR: { type: "currency", name: "Indonesian rupiah", symbol: "Rp", decimal: ",", position: "pre" },
  INR: { type: "currency", name: "Indian rupee", symbol: "₹", decimal: ".", position: "pre" },
  BRL: { type: "currency", name: "Brazilian real", symbol: "R$", decimal: ",", position: "pre" },
  RUB: { type: "currency", name: "Russian ruble", symbol: "₽", decimal: ",", position: "pre" },
  HRK: { type: "currency", name: "Croatian kuna", symbol: "kn", decimal: ",", position: "post" },
  JPY: { type: "currency", name: "Japanese yen", symbol: "¥", decimal: ".", position: "pre" },
  TBH: { type: "currency", name: "Thai baht", symbol: "฿", decimal: ".", position: "pre" },
  CHF: { type: "currency", name: "Swiss franc", symbol: "Fr.", decimal: ",", position: "post" },
  SGD: { type: "currency", name: "Singapore dollar", symbol: "$", decimal: ".", position: "pre" },
  PLN: { type: "currency", name: "Polish złoty", symbol: "zł", decimal: ",", position: "pre" },
  BGN: { type: "currency", name: "Bulgarian lev", symbol: "Лв.", decimal: ",", position: "pre" },
  TRY: { type: "currency", name: "Turkish lira", symbol: "₺", decimal: ".", position: "pre" },
  CNY: { type: "currency", name: "Chinese renminbi", symbol: "¥", decimal: ".", position: "pre" },
  NOK: { type: "currency", name: "Norwegian krone", symbol: "kr", decimal: ".", position: "post" },
  NZD: { type: "currency", name: "New Zealand dollar", symbol: "$", decimal: ".", position: "pre" },
  ZAR: { type: "currency", name: "South African rand", symbol: "R", decimal: ".", position: "pre" },
  MXN: { type: "currency", name: "Mexican peso", symbol: "$", decimal: ".", position: "pre" },
  ILS: { type: "currency", name: "Israeli shekel", symbol: "₪", decimal: ".", position: "pre" },
  GBP: { type: "currency", name: "Pound Sterling", symbol: "£", decimal: ".", position: "pre" },
  KRW: { type: "currency", name: "South Korean won", symbol: "₩", decimal: ".", position: "pre" },
  MYR: { type: "currency", name: "Malaysian ringgit", symbol: "RM", decimal: ".", position: "pre" },
};
