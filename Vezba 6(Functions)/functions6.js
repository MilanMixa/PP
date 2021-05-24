// 1.Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.
function apperanceOfVowel(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if ("a" === string[i] || "A" === string[i]) {
      counter++;
    } else if ("e" === string[i] || "E" === string[i]) {
      counter++;
    } else if ("i" === string[i] || "I" === string[i]) {
      counter++;
    } else if ("o" === string[i] || "O" === string[i]) {
      counter++;
    } else if ("u" === string[i] || "U" === string[i]) {
      counter++;
    }
  }
  return counter;
}
console.log(apperanceOfVowel("aeiouAEIOU"));

// ILI OVAKO

function apperanceOfLetter(string, arrLowercase, arrUppercase) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    for (j = 0; j < arrUppercase.length; j++)
      if (arrLowercase[j] === string[i] || arrUppercase[j] === string[i]) {
        counter++;
      }
  }
  return counter;
}
console.log(
  apperanceOfLetter(
    "aeiouAEIOU",
    ["a", "e", "i", "o", "u"],
    ["A", "E", "I", "O", "U"]
  )
);

// 2. Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function combine(array, array1) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    output[output.length] = array[i];
    output[output.length] = array1[i];
  }
  return output;
}

var a = ["a", "b", "c"],
  b = [1, 2, 3];
console.log(combine(a, b));

//  3.Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
function rotate(array, k) {
  for (var j = 0; j < k; j++) {
    var p = array[0];
    for (var i = 0; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array[array.length - 1] = p;
  }
  return array;
}
var a = [1,2,3,4,5,6];
console.log(rotate(a, 2));

// 4.Write a function that takes a number and returns array of its digits.

function digit(number) {
  //100
  var output = [];
  var string = "" + number;
  for (var i = 0; i < string.length; i++) {
    output[output.length] = string[i];
  }
  return output;
}

var input = 100;

console.log(digit(input));

// 5.Write a program that prints a multiplication table for numbers up to 12.
function multiplicate(){
  var result = 0;
  for(var i = 0; i <=12; i++){
    for(var j = 0; j <=12; j++){
      result = i * j;
      console.log(i + " * " + j + " = " + result)
    }
  } 
}
multiplicate();

// 6.Write a function to input temperature in Celsius and convert to Fahrenheit.

function convert(c) {
  var f = (9 * c) / 5 + 32;
  return c + "°C is " + f + "°F";
}
var c = 30;
console.log(convert(c));

// 7.Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
function Max(array) {
  var max = -Infinity;
  for ( var i = 0; i < array.length; i++) {
      if (isFinite(array[i]) && array[i] > max) {
          max = array[i];
      } 
  }
  return max;
}
var arr = [1,2,3,4,5,6, undefined, true, null];
console.log(Max(arr));


// 8.Write a function to find the maximum and minimum elements. Function returns an array.

function minAndMax(array) {
  var min = Infinity;
  var max = -Infinity;
  var output = [];
  for ( var i = 0; i < array.length; i++) {
      if (array[i] > max) {
          max = array[i];
      } 
      if(array[i] < min) {
          min = array[i]; 
      }  
  }
  output[output.length] = min;
  output[output.length] = max;
  return output;
}
var arr = [1,2,3,4,5,6];
console.log(minAndMax(arr));

// 9.Write a function to find the median element of array.
function medianElement (arr){
  var median = 0;
  for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < ( arr.length - i -1 ); j++){
          if(arr[j] > arr[j+1]){
              var temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j+1] = temp
          }
      }
  }
  if(arr.length % 2 === 1) {
      median = arr[parseInt(arr.length/2)];
  } else if ( arr.length % 2 === 0) {
      median = (arr[arr.length/2]+arr[(arr.length/2)-1])/2
  }
  console.log(arr)
  return median;
}
var arr = [ 13, 11, 15, 5, 6, 1, 8, 12, ];
console.log(medianElement(arr));


// 10.Write a function to find the element that occurs most frequently.

function frequent(array){
  var counter = 0;
  var maxCounter = 0;
  var item;
  for(var i = 0; i < array.length; i++){
      for(var j = i; j < array.length; j++){
          if(array[i] === array[j]){
              counter++;
          }
      }
      if(counter > maxCounter){
          item = array[i]; 
          maxCounter = counter; 
      }
      counter = 0; 
  }
  return item;
}

console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

// 11.Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
function returnFML(array){
  var result = [];
  if(array === []){
    return array
  }
  if(array.length % 2 === 1){
    result[result.length] = array[0];
    result[result.length] = array[parseInt(array.length / 2)];
    result[result.length] = array[array.length-1];
  }
  if(array.length % 2 === 0){
    result[result.length] = array[0];
    result[result.length] = array[array.length-1];
}
return result;
}

var arr = [ 13, 11, 15, 5, 6, 1, 8, 12,12];
console.log(returnFML(arr));

// 12.Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

function average() {
  var sum = 0;
  var output = [];
  for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
  }
  output[output.length] = sum / arguments.length
  return output;
}
console.log(average(1,2,3));

// 13.Write a function to find all the numbers greater than the average.
function average(array) {
  var sum = 0;
  var output = [];
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  for (var j = 0; j < array.length; j++) {
    if (array[j] > sum / array.length) {
      output[output.length] = array[j];
    }
  }
  return output;
}

var a = [1, 2, 3, 4, 5, 6];
console.log(average(a));

// 14.The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

function bmi (weight, height) {
  var calcBmi = weight/(height*height);
  var output = '';
  if (calcBmi < 15) {
      output = 'Starvation';
  } else if ( calcBmi < 17.5) {
      output = 'Anorexic';
  } else if ( calcBmi < 18.5) {
      output = 'Underweight';
  } else if ( calcBmi >= 18.5 && calcBmi < 25) {
      output = 'Ideal';
  } else if ( calcBmi >= 25 && calcBmi < 30) {
      output = 'Overweight';
  } else if ( calcBmi >= 30 && calcBmi < 40) {
      output = 'Obese';
  } else {
      output = 'Morbidly obese';
  }
  console.log(calcBmi);
  return output;
}
var a = 42;
var b = 1.70;
console.log(bmi(a,b));

// 15.Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function helloWorld(array){
  var p = "";
  var x = "";
  for(var i = 0; i < array.length; i++){
    if(array[i].length > p.length){ // ovde smo nasli najduzu rec
      p = array[i]
    }
  }
  var line = p.length + 4; // najduza rec + 4 mesta
  for(var j = 0; j < line; j++){
    x += "*"   // ovde dobijamo prvi red
  }
  console.log(x);
  for(var k = 0; k < array.length; k++){
    x = "* " + array[k];
    var countSpace = line - x.length-1;
    for(var l = 0; l < countSpace; l++){
      x += " "
    } 
    x+="*"
    console.log(x)
  }
  x = ""; // da ne bi stampao zadnju liniju -> * frame ***********
  for(var m = 0; m < line; m++){
    x += "*"   // ovde dobijamo zadnji red
  }
  console.log(x)
}

var arr = ["Hello", "World", "in", "a", "frame"];
helloWorld(arr);

