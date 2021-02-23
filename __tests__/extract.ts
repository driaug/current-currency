import { extract } from "../src";

test("Extract USD from string", () => {
  expect(extract("10.2USD")).toHaveProperty("name");
});

test("Extract BTC from string", () => {
  expect(extract("10.2BTC")).toHaveProperty("name");
});

test("Extract misplaced RUB from string", () => {
  expect(extract("RUB10.2")).toHaveProperty("name");
});

test("Do not extract unknown currency", () => {
  const t = () => {
    extract("unk10.2");
  };
  expect(t).toThrowError("Unsupported currency code");
});
