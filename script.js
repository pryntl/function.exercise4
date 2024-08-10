//the function base code.
function collect(array1, array2) {
    //made a variable to show the final result.
  let output = 0;
  //if our numbers are already an array, we simply just put them in one new array, (using concat method.)
  if (typeof array1 == "object" && typeof array2 == "object") {
    output = array1.concat(array2);
    //if our numbers aren't an array, we first make them array(using split method.) then we put them in a new array (using concat method.)
  } else if (typeof array1 == "string" || typeof array2 == "string") {
    output = array1.split().concat(array2.split());
  }
  //then at the end we return the main var.
  return output;
}
//testing with already arrays
console.log(collect([1, 2], [3, 4]));
//testing with strings.
console.log(collect("1", "2"));
