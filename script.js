function collect(array1, array2) {
  let output = 0;
  if (typeof array1 == "object" && typeof array2 == "object") {
    output = array1.concat(array2);
  } else if (typeof array1 == "string" || typeof array2 == "string") {
    output = array1.split().concat(array2.split());
  }
  return output;
}
console.log(collect([1, 2], [3, 4]));
console.log(collect("1", "2"));
