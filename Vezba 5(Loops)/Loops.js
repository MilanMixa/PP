// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

for (var i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
 for (var i = 0; i < 1000; i++){
   if(i % 3 === 0 && i % 5 ===0){
     sum +=i
   }
 }
 console.log(sum);

// 3. Write a program to compute the sum and product of an array of integers.
var sum1 = 0;
var array = [1, 2, 3, 4, 5];
for(var i = 0; i <array.length; i++){
  sum1 += array[i];
}
console.log(sum1);


// 4. Write a program which prints the elements of the following array as a single string.
// var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var sum ="";
var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
for(var i = 0; i < x.length; i++){
  console.log(x[i]);
}

// var array = x.toString();
// console.log(array);
// console.log(typeof array);

// console.log(x.join());

// 5. Write a program that prints the elements of the following array.

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27]
];
var string = "";

for (i = 0; i < a.length; i++) {
  for (j = 0; j < a[i].length; j++) {
    string += a[i][j] + "\t";
  }
  string += "\n";
}

console.log(string);

// 6. Write a program that outputs the sum of squares of the first 20 numbers.

for (var i = 1; i <= 20; i++) {
  var square = i * i;
  console.log(square);
}

// 7. Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.

// David 80
// Marko 77
// Dany 88
// John 95
// Thomas 68
// The grades are computed as follows :

//  60% F
//  70% D
//  80% C

//  90% B
//  100% A

var grades = [80, 77, 88, 95, 68];
var percentage = 0;
for(var i = 0; i < grades.length; i++){
  percentage += grades[i];
} 
var average = percentage / grades.length;
if(average < 60){
  console.log("F")
} else if(average < 70){
  console.log("D")
} else if(average < 80){
  console.log("C")
} else if (average < 90){
  console.log("B")
} else
  console.log("A")
;




// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print Fizz; instead of the number, and for numbers
// divisible by 5 (and not 3), print Buzz instead. When you have that working, modify your
// program to print FizzBuzz, for numbers that are divisible by both 3 and 5 (and still print
// Fizz; or Buzz for numbers divisible by only one of those).

var i;
for(i = 1; i <= 100; i++){
  if(i % 3 === 0  && i % 5 !== 0){
    console.log("Fizz");
  }else if(i % 5 === 0 && i % 3 !== 0){
  console.log("buzz")}
  else if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz")
  }else{
    console.log(i)
  }
};
