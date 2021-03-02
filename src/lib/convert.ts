import { Currency } from "../types/currencies";
import axios from "axios";

/**
 * Converts one currency to another.
 * @param fromCurrency The original currency
 * @param amount The amount of money in the original currency
 * @param toCurrency The currency to convert to
 * @return An object containing the new currency and value
 */
export function convert(
  fromCurrency: Currency,
  amount: number,
  toCurrency: Currency
): Promise<{ currency: Currency; amount: number }> {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}`)
      .then((body) => {
        return resolve({ currency: toCurrency, amount: amount * body.data.rates[toCurrency] });
      })
      .catch((err) => {
        return reject(err.response.data.error);
      });
  });
}
