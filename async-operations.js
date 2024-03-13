function fetchData(callback) {
  setTimeout(() => {
    callback("Peanut Butter");
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("peanut butter"), 1000);
  });
}

function fetchPromiseReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Something Went Wrong."), 1000);
  });
}

module.exports = { fetchData, fetchPromise, fetchPromiseReject };
