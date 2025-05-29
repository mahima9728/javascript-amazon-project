import { formatCurrency } from "../../scripts/utils/money.js";

// ///TestCase 1

// if (formatCurrency(2095) === "20.95") {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// ///TestCase 2

// if (formatCurrency(0) === "0.00") {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// ///TestCase 3
// if (formatCurrency(2000.5) === "20.01") {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// it("rounds up to the nearest cent", () => {
//   expect(formatCurrency(2000.5)).toEqual("20.01");
// });

// it("rounds down to the nearest cent", () => {
//   expect(formatCurrency(2000.4)).toEqual("20.00");
// });

// it("works with negative numbers", () => {
//   expect(formatCurrency(-500)).toEqual("-5.00");
// });
describe("formatCurrency", () => {
  it("works with zero", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it("converts cents into dollars", () => {
    expect(formatCurrency(1234)).toEqual("12.34");
  });

  it("rounds up to the nearest cent", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });

  it("rounds down to the nearest cent", () => {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });

  it("works with negative numbers", () => {
    expect(formatCurrency(-500)).toEqual("-5.00");
  });
});
