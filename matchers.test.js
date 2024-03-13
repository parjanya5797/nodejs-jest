const sum = require("./sum");

test("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3); //works with primitive data types like string,number
});

test("2+2 is 4", () => {
  expect(2 + 2).toBe(4);
});

test("Object Assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 }); // toEqual to match non primitive values
});

test("Null is Falsy", () => {
  expect(null).toBeFalsy(); // toBeFalsy checks if response is false
});

test("1 is Truthy", () => {
  expect(1).toBeTruthy(); // toBeTruthy checks if response is true
});

test("throws an invalid input", () => {
    expect(() => {
        sum('12','asd')
    }).toThrow();            // toThrow checks if a error is sent as a response of not
});
