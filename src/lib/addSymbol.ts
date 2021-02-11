import { Currency } from "../types/currencies";
import { Currencies } from "../utils/currencies";

/**
 * Adds the appropriate currency symbol
 * @param currency The code of the currency e.g. USD
 * @param amount The amount of money
 * @param position Optional parameter to overwrite the position of the symbol
 */
export function addSymbol(currency: Currency, amount: number, position?: "pre" | "post") {
  if (position) {
    return position === "pre" ? Currencies[currency].symbol + amount : amount + Currencies[currency].symbol;
  }

  return Currencies[currency].position === "pre"
    ? Currencies[currency].symbol + amount
    : amount + Currencies[currency].symbol;
}
