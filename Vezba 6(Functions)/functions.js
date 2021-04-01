// 1. Write a program that calculates the maximum of two given numbers.
//ubaciti else if
function maximum(a, b) {
  var max = "";
  if (a > b) {
    return (max += "Max of two given numbers is: " + a);
  } else if ( b > a){
    return (max += "Max of two given numbers is:" + b);
  } else{
    return "Numbers are equal"
  }
}

var max = maximum(20, 20);
console.log(max);

// 2. Write a program that checks if a given number is odd.

function number(a) {
  var num = "";
  if (a % 2 === 0) {
    return (num += " number " + a + " is even:");
  } else {
    return (num += " number " + a + " is odd:");
  }
}

var num = number(11);
console.log(num);

// 3. Write a program that checks if a given number is a three digit long number.

function checks(b) {
  if (b >= 100 && b < 1000) {
    return true;
  } else {
    return false;
  }
}

var result = checks(100);
console.log(result);

// 4. Write a program that calculates an arithmetic mean of four numbers.

// ubaciti arguments
function calculator(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total / array.length;
}

var array = [10, 20, 30, 40];
console.log(calculator(array));

// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// *   *
// *   *
// *   *
// *****

function chart(number) {
  var star = "";
  for (i = 0; i < number; i++) {
    for (j = 0; j < number; j++) {
      if (i === 0 || i === number - 1) {
        star += "*";
      } else if (j === 0 || j === number - 1) {
        star += "*";
      } else {
        star += " ";
      }
    }
    star += "\n";
  }
  return star;
}
console.log(chart(10));

// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

function drawHorizontal(numberOfRows, arguments) {
  var nesto = "";
  for (var i = 0; i < numberOfRows; i++) {
    for (var j = 0; j < arguments[i]; j++) {
      nesto += "* ";
    }
    nesto += "\n";
  }
  return nesto;
}

var arguments = [5, 3, 7];

console.log(drawHorizontal(arguments.length, arguments));

// 7. Write a program that calculates a number of digits of a given number.
function numOfDigits (num){
  var digitCounter = 0;
  var absNum = num;
  if(num < 0){
    num *=-1;
  }
  for(var i = absNum; i >=1; i/=10){
    digitCounter++;
  }
  return digitCounter;
}

console.log(numOfDigits(100));

// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

function appearances(array, number) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === number) {
      count += 1;
    }
  }
  return count;
}

var a = [2, 4, 7, 8, 7, 7, 1],
  e = 7;
console.log(appearances(a, e));

// 9. Write a program that calculates the sum of odd elements of a given array.

function sum(array) {
  var summ = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) summ += array[i];
  }
  return summ;
}

var someNumbers = [1, -5, 10, 7, -3, 27, -23];
console.log(sum(someNumbers));

// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.
function calculator1(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      count += 1;
    }
  }
  return count;
}

var letters =
  " This is a very long string thAt contains letter A and I hate doing this At 2 a.m";
console.log(calculator1(letters));

// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

function concatenator(string, number) {
  var total = "";
  for (var i = 0; i < number; i++) {
    total += string;
  }
  return total;
}

var a = "abc";
var b = 4;
console.log(concatenator(a, b));
