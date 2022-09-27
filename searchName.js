function searchName(input, limits, transformationFunction) {
  if (typeof input !== "string") return "Invalid, Name must be string!";
  if (typeof limits !== "number")
    return "Invalid, Limit output must be number!";
  if (typeof transformationFunction !== "function") return "Invalid Function!";
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];
  const resultSearch = [];
  for (let i = 0; i <= name.length - 1; i++) {
    transformationFunction(name[i], resultSearch);
    // console.log(resultSearch);
    // console.log(typeof resultSearch);
  }
  if (resultSearch.length == 0) return "Data not found!";
  if (resultSearch.length >= 0) return resultSearch.slice(0, limits);
}

const callback = (list, restArr) => {
  if (list.toLowerCase().indexOf(input.toLowerCase()) > -1) {
    restArr.push(list);
    return;
  }
};

const input = "an";
console.log(searchName(input, 3, callback));
