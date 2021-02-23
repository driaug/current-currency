import { Currency } from "../types/currencies";
import { Currencies, isCurrency } from "../utils/currencies";
import { CryptoCurrency } from "../types/cryptocurrencies";
import { Cryptocurrencies } from "../utils/cryptocurrencies";

/**
 * Adds the appropriate currency symbol
 * @param currency The code of the currency e.g. USD
 * @param amount The amount of money
 * @param position Optional parameter to overwrite the position of the symbol
 */
export function addSymbol(currency: Currency | CryptoCurrency, amount: number, position?: "pre" | "post") {
  const currencyDetail = isCurrency(currency) ? Currencies[currency] : Cryptocurrencies[currency];

  if (position) {
    return position === "pre" ? currencyDetail.symbol + amount : amount + currencyDetail.symbol;
  }

  return currencyDetail.position === "pre" ? currencyDetail.symbol + amount : amount + currencyDetail.symbol;
}
