import { Currencies } from "../utils/currencies";
import { Currency, CURRENCY_CODES } from "../types/currencies";

/**
 * Extracts the currency from a string
 * @param currencyString The string containing amount and currency code
 */
export function extract(currencyString: string) {
  const currencySymbol = currencyString.replace(/[0-9,. ]/g, "") as Currency;

  if (!CURRENCY_CODES.includes(currencySymbol)) {
    throw new Error("Unsupported currency code");
  }

  return Currencies[currencySymbol];
}
