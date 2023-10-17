let animals = [];

beforeAll(() => {
  animals = ["elephant", "zebra", "bear", "tiger"];
}); // run once before all the tests

beforeEach(() => {
  animals = ["elephant", "zebra", "bear", "tiger"];
}); // this function to ensure the initial array is passed before each test is run

afterEach(() => {
  animals = ["elephant", "zebra", "bear", "tiger"];
});

describe("animal array", () => {
  it("should add animal to the end of my array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });
  it("should add animal at the beggining of the array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });
  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});
