import { Currency } from "../types/currencies";
import axios from "axios";
import { isCurrency } from "../utils/currencies";
import { CryptoCurrency } from "../types/cryptocurrencies";
import { isCryptoCurrency } from "../utils/cryptocurrencies";

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
  return new Promise((resolve, reject) => {
    if (isCurrency(fromCurrency) && isCurrency(toCurrency)) {
      axios
        .get(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}`)
        .then((body) => {
          return resolve({ currency: toCurrency, amount: amount * body.data.rates[toCurrency] });
        })
        .catch((err) => {
          return reject(err.response.data.error);
        });
    } else if (isCryptoCurrency(fromCurrency) && isCryptoCurrency(toCurrency)) {
      axios
        .get(`https://api.coinbase.com/v2/exchange-rates?currency=${fromCurrency}`)
        .then((body) => {
          return resolve({ currency: toCurrency, amount: amount * body.data.data.rates[toCurrency] });
        })
        .catch((err) => {
          return reject(err.response.data);
        });
    } else {
      return reject(`Cannot convert ${fromCurrency} to ${toCurrency}`);
    }
  });
}
