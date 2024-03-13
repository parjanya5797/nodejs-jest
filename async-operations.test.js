const {
  fetchData,
  fetchPromise,
  fetchPromiseReject,
} = require("./async-operations");

//callback
test("the result is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("Peanut Butter");
      done();
    } catch (error) {
      console.log(error);
      done(error);
    }
  }

  fetchData(callback);
});

//Promise
test("test result is peanut butter from Promise", () => {
  return expect(fetchPromise()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", () => {
  return expect(fetchPromiseReject()).rejects.toMatch("Something Went Wrong.");
});

test("The data is peanut butter via async await", async () => {
  const data = await fetchPromise();
  expect(data).toBe("peanut butter");
});
