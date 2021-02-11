import { extract } from "../src/lib/extract";

test("Extract USD from string", () => {
  const t = () => {
    extract("10.2USD");
  };
  expect(t).toHaveProperty("name");
});

test("Extract misplaced RUB from string", () => {
  const t = () => {
    extract("RUB10.2");
  };
  expect(t).toHaveProperty("name");
});

test("Do not extract unknown currency", () => {
  const t = () => {
    extract("unk10.2");
  };
  expect(t).toThrowError("Unsupported currency code");
});
