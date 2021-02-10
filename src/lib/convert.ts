import { CurrencyCodes } from "../types/currencies";
import fetch from "node-fetch";

/**
 * Converts one currency to another.
 * @param fromCurrency The original currency
 * @param amount The amount of money in the original currency
 * @param toCurrency The currency to convert to
 * @return An object containing the new currency and value
 */
export function convert(
  fromCurrency: CurrencyCodes,
  amount: number,
  toCurrency: CurrencyCodes
): Promise<{ currency: CurrencyCodes; amount: number }> {
  return new Promise((resolve, reject) => {
    if (fromCurrency === toCurrency) {
      return reject("fromCurrency cannot be the same as toCurrency.");
    }

    fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}`)
      .then((res) => res.json())
      .then((body) => {
        if (body.error) {
          return reject(body.error);
        }

        resolve({ currency: toCurrency, amount: amount * body.rates[toCurrency] });
      });
  });
}
