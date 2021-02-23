import { addSymbol } from "../src";

test("Add dollar sign in front of amount", () => {
  expect(addSymbol("USD", 10.2)).toBe("$10.2");
});

test("Add bitcoin sign", () => {
  expect(addSymbol("BTC", 10.2)).toBe("฿10.2");
});

test("Force add dollar sign behind amount", () => {
  expect(addSymbol("USD", 10.2, "post")).toBe("10.2$");
});
