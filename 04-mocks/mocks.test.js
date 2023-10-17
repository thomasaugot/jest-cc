const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return results.data;
};

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it("mock callback", () => {
  const mockCalledback = jest.fn((x) => 42 + x); // this callback is adding 42 to x, which is defined in the array of parameters passed

  forEach([0, 1], mockCalledback); // here we pass two items in the array, so the callback will be called twice

  expect(mockCalledback.mock.calls.length).toBe(2); // we test it here and it passes since we called it twice

  expect(mockCalledback.mock.results[0].toBe(42));
});

it("mock return"),
  () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("Hello");
  };

it("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    // here we mock the api return so we dont have to actually do it to test it
    data: {
      id: 1,
      todo: "Write 100 tests",
    },
  });
  const results = await fetchData(1);

  expect(results.todo).toBe("Write 100 tests");
});
