import { Currencies, CurrencyCodes } from "../types/currencies";

export function addSymbol(currency: CurrencyCodes, amount: number, position?: "pre" | "post") {
  if (position) {
    return position === "pre" ? Currencies[currency].symbol + amount : amount + Currencies[currency].symbol;
  }

  return Currencies[currency].position === "pre"
    ? Currencies[currency].symbol + amount
    : amount + Currencies[currency].symbol;
}
