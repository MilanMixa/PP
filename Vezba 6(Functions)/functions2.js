// 1. Write a function to check whether the `input` is a string or not.
// "My random string" true
// 12 - false

function check(input) {
    var result;
  if (typeof(input) === "string") {
    result=true
  } else {
      result= false
  }
  return result;
}
var input = "My random string"
console.log(check(input))


// 2. Write a function to check whether a string is blank or not.
// My random string ; false
// " "; true
// 12; false
// false ; false

function blank(string){
    var result;
    if (string===" "){
        result=true;
    }
    else {
        result=false;
    }
    return result
}
var res=blank(false);
console.log(res);


// 3. Write a function that concatenates a given string n times (default is 1).
// "Ha";  "Ha";
// Ha, 3 -"HaHaHa"


function concat(string,a){
    var res="";
     for(var i=1; i<=a; i++){
         res+=string;
     }
​
     return res;
}
​
console.log(concat("Ha",3));


// 4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function count(string){
    var counter = 0;
    for(var i = 0; i < string.length; i++){
        if('n' === string[i]){
            counter++
        }
    }
    return counter;
}

var input = "My random string";
console.log(count(input));

// 5. Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.

function firstIndex(string, character){
    var counter = -1;
    var index = 0;
    while(index < string.length && character !== string[index]){
        index++;
    }
    if(index >= string.length){
        return counter;
    } else{
        return index
    }
}
var input = "Ana";
console.log(firstIndex(input, 'A'));
// 6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function firstIndex(string, character){
    var counter = -1;
    var index = string.length - 1;
    while(index > -1 && character !== string[index]){
        index--;
    }
    if(index <= -1){
        return counter;
    } else{
        return index
    }
}
var input = "My random string";
console.log(firstIndex(input, 'n'));

// 7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]
function convert(string){
    var newString = [];
    for(var i = 0; i < string.length; i++){
        if(string[i] == " "){
            newString[newString.length] = null;
        }else{
            newString[newString.length] = string[i];
        }   
    }
    return newString;
}

var input = "My random string";
console.log(convert(input));

// 8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function findPrime(prime){
    for(var i = 2; i < prime; i++ ){
        if(prime % i === 0){
            return ("This isn't a prime number")
        } 
    }
    return("This is a prime number")
}

var number = 9;
console.log(findPrime(number));


// 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"
function sep(string, separator){
    var newString ="";
    if(!separator){
        separator = "-"
    }
    for(var i = 0; i < string.length; i++){
        if(string[i] === " "){
            newString += separator;
        }else{
            newString += string[i]
        }
    }
    return newString
}

var input = "My random string";
console.log(sep(input));

// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

function find(string, n){
    var newString = "";
    for(var i = 0; i < n; i++){
        newString += string[i]
    }
    newString += "..."
    return newString
}

var input = "My random string";
console.log(find(input, 5));

// 11.  Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

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

// 12. Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

function calculator(year, dob, sex){
    if(sex !== "male" && sex !== "female"){
        return "Your sex should be in form male or female";
     }
        var currentAge = year - dob;
    if (sex === "male" && currentAge >= 65) {
        return "Retired"    
    } else if (sex === "male") {
        var retirementYear = 65;
        var yearsLeft = retirementYear - currentAge;
        return yearsLeft;
    }
    if (sex === "female" && currentAge >= 60) {
        return "Retired"    
    } else if (sex === "female") {
        var retirementYear = 60;
        var yearsLeft = retirementYear - currentAge;
        return yearsLeft;
    }    
}

var output = calculator(2021, 1990, "male");
console.log(output);

// 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

function humanize(number){
    var result;
    switch(true){
        case number % 10 === 1 && number !== 11:
            result = number + "st";
            break;
        case number % 10 === 2 && number !==12:
            result = number + "nd";
            break;
        case number % 10 === 3 && number !==13:
            result = number + "rd";
            break;
        default:
            result = number + "th";
            break
    }
    return result;
}

var output = humanize(1);
console.log(output);
