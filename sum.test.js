const sum = require("./sum");

it("should add 1+2 to equal 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

describe("truthy or Falsy", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    // expect(n).not.tobeTruthy();
    // expect(n).toBeNull();
    // expect(n).toBeUndefined();
  });
});

describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3);
    expect(value).toBeLessThan(7);
  });
});

it("adding floats", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
  expect(value).toBeCloseTo(0.2999999999);
});

describe("strings", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

describe("arrays", () => {
  const shoppinglist = ["diapers", "kleenex", "trash bags", "paper towels", "milk"];
  expect(shoppinglist).toContain("milk");
});

function compileAndroidCode() {
  throw new Error("you are using the wrong jdk");
}

describe("exceptions", () => {
  it("compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow(Error);
  });
});
