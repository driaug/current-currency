import { convert } from "../src";

test("Convert EUR to USD", () => {
  convert("EUR", 10, "USD").then((result) => {
    expect(result).toHaveProperty("currency");
    expect(result).toHaveProperty("amount");
  });
});

test("Convert MXN to GBP", () => {
  convert("MXN", 10, "GBP").then((result) => {
    expect(result).toHaveProperty("currency");
    expect(result).toHaveProperty("amount");
  });
});

test("Convert EUR to EUR", () => {
  convert("EUR", 10, "EUR").catch((err) => {
    expect(err).toBe("fromCurrency can't be the same toCurrency");
  });
});
