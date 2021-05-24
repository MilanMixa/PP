// 1.Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function minAndMax (array) {
    var min = Infinity;
    var max = -Infinity;
    var output = [];
    for ( var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        } else if(array[i] < min) {
            min = array[i]; 
        }  
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] === min) {
            output[output.length] = max;
        } else if (array[i] === max) {
            output[output.length] = min;
        } else {
            output[output.length] = array[i];
        }
    }
    return output
}
var input = [ 3, 500, 12, 149, 53, 414, 1, 19 ];
console.log(minAndMax(input));

// 2.Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function dividing(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] === 0){
            array[i] = 20;
        } else{
            array[i] = array[i] / 2 + 5;
        }
    } return array
}

var input = [ 3, 500, -10, 149, 53, 414, 1, 19 ];
console.log(dividing(input));


// 3.Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function studnets(names, points){
    var output = "";
    for(var i = 0; i < points.length; i++){  // ((points[i] - 1) / 10) + 1
        // if(points[i] > 50 && points[i] <= 60){
        //     output = names[i] + " acquired " + points[i] + " points and earned 6."
        //     console.log(output);
        // } else if(points[i] > 60 && points[i] <= 70){
        //     output = names[i] + " acquired " + points[i] + " points and earned 7."
        //     console.log(output);
        // } else if(points[i] > 70 && points[i] <= 80){
        //     output = names[i] + " acquired " + points[i] + " points and earned 8."
        //     console.log(output);
        // } else if(points[i] > 80 && points[i] <= 90){
        //     output = names[i] + " acquired " + points[i] + " points and earned 9."
        //     console.log(output);
        // } else if(points[i] > 90 && points[i] <= 100){
        //     output = names[i] + " acquired " + points[i] + " points and earned 10."
        //     console.log(output);
        // } else if (points[i] <= 50){
        //     output = names[i] + " acquired " + points[i] + " points and failed to complete the exam."
        //     console.log(output);
        // }
        var pt = (parseInt((points[i] - 1) / 10) + 1);
        if(pt < 6){
            output = names[i] + " acquired " + points[i] + " points and failed to complete the exam."
        }else{
            output = names[i] + " acquired " + points[i] + " points and earned " + pt;
        }
        console.log(output);
    }
}
var names = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var grades = [ 50, 39, 63, 72, 99, 51, 83, 59 ];
studnets(names, grades);

// 4.(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

function sort(arr){
	
    for(var i = 0; i < arr.length; i++){

    // Last i elements are already in place
    for(var j = 0; j < ( arr.length - i -1 ); j++){

        // Checking if the item at present iteration
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){

        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
        }
    }
    }
    for(var i = 0; i < arr.length; i++){
        arr[i] *= 2;
    }
    // Print the sorted array
    console.log(arr);
    }
    // This is  unsorted array
    var arr = [ 13, 11, 15, 5, 6, 1, 8, 12];

    sort(arr);
    
	
// 5.(skip :))Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
function sort(arr){
	
    for(var i = 0; i < arr.length; i++){

    for(var j = 0; j < ( arr.length - i -1 ); j++){
        if(arr[j] < arr[j+1]){
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
        }
    }
    }
    console.log(arr);
    }
    var arr = [ 13, 11, 15, 5, 6, 1, 8, 12];
    sort(arr);
	
// 6.Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

function calculate(){
    var sum = 0;
    for(var i = 1; i <= 1000; i++){
        if(i % 2 === 0){
            sum += i;
        }else{
            if(i <= 500 ){
                sum -= i;
            }
        }
    } 
    sum *= 12.5;
    return sum;
}

console.log(calculate());



// 7.Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

function takeTwo(array) {
    var output = ''; //Anne
    var newStr = ''; //An
    for (var i = 0; i < array.length; i++) {
        if(array[i].length > 2) {
            output = array[i] //Anne
            newStr+= output[0]; //A
            newStr+=output[1]; // n
        }
    }
    return newStr
}
var input = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];
console.log(takeTwo(input));

	
// 8.Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reversed(string){

    var newString = "";
    for(var i = string.length-1 ; i >= 0; i--){
        newString+=string[i]
    }
    return newString
}

var input = "Belgrade Institute of Technology";
console.log(reversed(input));



// 9.Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function numCombo (num1, num2) {
    var counter = 0;
    for(var i = num1; i <= num2; i++) {
        for (var j = num1; j < num2; j++) {
            if(i !== j) {
                console.log(i,j);
                counter++
            }
        }
    }
    return counter
}
var a = 1;
var b = 7;
console.log(numCombo(a,b));

// 10.Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

function isPrime(num){
    var primeNum = true;
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            primeNum = false;
            break
        }
    }
    return primeNum;
}

var input = 15;
console.log(isPrime(input));
	
// 11.Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

function checkPalindrom(palindrom){
   var check = true;
   var j = palindrom.length-1;
   
    for( var i = 0; i < palindrom.length / 2; i++ ){
        if (palindrom[i] === ' ' || palindrom[j] === ' ') {
            while (palindrom[i] === ' '){
                i++;
            }
            while (palindrom[j] === ' '){
                j--;
            }
        }
        if( palindrom[i] != palindrom[j] ){
           check = false;
           break; 
        }
        j--;
    }
  if( check ) {
  console.log('the word is palindrome.');
  }
  else {
console.log('the word is not palindrome.');
  }
}
var input = "a nut for a jar of             tuna";
checkPalindrom(input);

// 12.Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

function divisor (num1, num2) {
    var result;
    for(var i = 0; i <= num1; i++) {
        if( num1 % i === 0 && num2 % i === 0) {
            result = i;
        }
    }
    return result1;
}
var a = 192;
var b = 42;
console.log(divisor(a,b));
