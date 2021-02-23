import { Currency } from "../types/currencies";
import fetch from "node-fetch";
import { CRYPTO_CURRENCY_CODES, CryptoCurrency } from "../types/cryptocurrencies";

/**
 * Converts one currency to another.
 * @param fromCurrency The original currency
 * @param amount The amount of money in the original currency
 * @param toCurrency The currency to convert to
 * @return An object containing the new currency and value
 */
export function convert(
  fromCurrency: Currency | CryptoCurrency,
  amount: number,
  toCurrency: Currency | CryptoCurrency
): Promise<{ currency: Currency | CryptoCurrency; amount: number }> {
  const fromCurrencyAsUnion = fromCurrency as Currency & CryptoCurrency;
  return new Promise((resolve, reject) => {
    if (fromCurrencyAsUnion === toCurrency) {
      return reject("fromCurrency cannot be the same as toCurrency.");
    }

    if (!CRYPTO_CURRENCY_CODES.includes(fromCurrencyAsUnion)) {
      fetch(`https://api.exchangeratesapi.io/latest?base=${ fromCurrency }`)
        .then((res) => res.json())
        .then((body) => {
          if (body.error) {
            return reject(body.error);
          }

          resolve({ currency: toCurrency, amount: amount * body.rates[toCurrency] });
        });
    } else {
      fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${ fromCurrencyAsUnion }`)
        .then((res) => res.json())
        .then((body) => {
          if (body.error) {
            return reject(body.error);
          }

          resolve({ currency: toCurrency, amount: amount * body.data.rates[toCurrency] });
        });
    }
  });
}
