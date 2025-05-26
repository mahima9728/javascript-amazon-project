import { formateCurrency } from "../scripts/utils/money.js";

describe("test suit: formatCurrency", () => {
  it("Convert cents into dollars", () => {
    expect(formateCurrency(2095)).toEqual("20.95");
  });
  it("Works with zero", () => {
    expect(formateCurrency(0)).toEqual("0.00");
  });
  it("rounds up to the nearest cent", () => {
    expect(formateCurrency(2000.5)).toEqual("20.01");
  });
});
