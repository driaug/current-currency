import { Currency } from "../types/currencies";
import fetch from "node-fetch";
import { CRYPTO_CURRENCY_CODES, CryptoCurrency, isCryptoCurrency } from "../types/cryptocurrencies";
import { isCurrency } from "../utils/currencies";

/**
 * Converts one currency to another.
 * @param fromCurrency The original currency
 * @param amount The amount of money in the original currency
 * @param toCurrency The currency to convert to
 * @return An object containing the new currency and value
 */
// TODO: clean
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

    if (isCurrency(fromCurrency) && isCurrency(toCurrency)) {
      fetch(`https://api.exchangeratesapi.io/latest?base=${ fromCurrency }`)
        .then((res) => res.json())
        .then((body) => {
          if (body.error) {
            return reject(body.error);
          }

          resolve({ currency: toCurrency, amount: amount * body.rates[toCurrency] });
        });
    } else if (isCryptoCurrency(fromCurrency) && isCurrency(toCurrency)){
      fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${ fromCurrencyAsUnion }`)
        .then((res) => res.json())
        .then((body) => {
          if (body.error) {
            return reject(body.error);
          }

          resolve({ currency: toCurrency, amount: amount * body.data.rates[toCurrency] });
        });
    } else if (isCurrency(fromCurrency) && isCryptoCurrency(toCurrency)) {
      fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${ toCurrency }`)
        .then((res) => res.json())
        .then((body) => {
          if (body.error) {
            return reject(body.error);
          }

          resolve({ currency: fromCurrencyAsUnion, amount: body.data.rates[fromCurrency] / amount });
        });
    }
  });
}
