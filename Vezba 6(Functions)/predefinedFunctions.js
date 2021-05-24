// 1. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

function converter(string) {
  var newArray = [];
  for (var i = 0; i < string.length; i++) {
    var x = parseFloat(string[i]);
    if (isFinite(x)) {
      newArray[newArray.length] = x;
    }
  }
  return newArray;
}

console.log(converter(["1", "21", undefined, "42", "1e+3", Infinity]));

//  2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”

function join(array) {
  var newString = "";
  for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i]) && array[i] !==null) {
      newString += array[i];
    }
  }
  return newString
}

var input = [NaN, 0, 15, false, -22, "", undefined, 47, null];
console.log(join(input));

//  3. Write a program to filter out falsy values from the array.
// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

function filter(a){
    var output = [];
    for(var i = 0; i < a.length; i++)
    if(a[i]){
        output[output.length] = a[i]
    }
    return output;
}

var input = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(filter(input));

// 4. Write a program that calculates a number of integer values in the array.
// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

function counter(b){
    var counter = 0;
    for(var i = 0; i < b.length; i++){
        if(b[i]){
            if(parseInt(b[i]) === b[i]){
                counter++
            }
        }
        else if(b[i] === 0){
            counter++
        }
    }
    return counter;
}

var input = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
console.log(counter(input));

// 5. Write a program that calculates a number of float values in the array.
// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

function counter(b){
    var counter = 0;
    for(var i = 0; i < b.length; i++){
        if(b[i]){
            if(parseInt(b[i]) !== b[i]){
                counter++
            }
        }
    }
    return counter;
}

var input = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
console.log(counter(input));

