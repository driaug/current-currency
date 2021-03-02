import { convert } from "../src";

test("Convert EUR to USD", async () => {
  const conversion = await convert("EUR", 10, "USD");
  expect(conversion).toHaveProperty("currency");
  expect(conversion).toHaveProperty("amount");
});

test("Convert MXN to GBP", async () => {
  const conversion = await convert("MXN", 10, "GBP");
  expect(conversion).toHaveProperty("currency");
  expect(conversion).toHaveProperty("amount");
});

test("Do not convert unknown currency to EUR", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  convert("unknown currency", 10, "EUR").catch((err) => {
    expect(err).toBe("Cannot convert unknown currency to EUR");
  });
});

test("Convert ETH to BTC", async () => {
  const conversion = await convert("ETH", 1, "BTC");
  expect(conversion).toHaveProperty("currency");
  expect(conversion).toHaveProperty("amount");
});
