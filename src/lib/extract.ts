import { Currencies } from "../utils/currencies";
import { Currency, CURRENCY_CODES } from "../types/currencies";
import { CRYPTO_CURRENCY_CODES, CryptoCurrency } from "../types/cryptocurrencies";
import { Cryptocurrencies } from "../utils/cryptocurrencies";

/**
 * Extracts the currency from a string
 * @param currencyString The string containing amount and currency code
 */
export function extract(currencyString: string) {
  const currencySymbol = currencyString.replace(/[0-9,. ]/g, "") as Currency & CryptoCurrency;

  if (CURRENCY_CODES.includes(currencySymbol)) {
    return Currencies[currencySymbol];
  }

  if (CRYPTO_CURRENCY_CODES.includes(currencySymbol)) {
    return Cryptocurrencies[currencySymbol];
  }

  throw new Error("Unsupported currency code");
}
