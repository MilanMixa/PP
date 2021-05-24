// 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"
function insertString(string, stringToAdd, index){
    var newString = "";

    if(!index || index === 1) {
        newString += stringToAdd;
    }

    for(var i = 0; i < string.length; i++){
        if (index !== 1 && i === index) {
            newString += stringToAdd;
        }
        newString += string[i];
    }

    console.log(newString);
}
insertString("My random string", "JS ");

/*
2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/
function join(array){
    var output = "";
    for(var i = 0; i < array.length; i++){
       var x = (array[i]);
       if(isFinite(x) && x !== null)
        output += x;
    }
    return output
}

console.log(join([NaN, 0, 15, false, -22, '', undefined, 47, null]))


// 3. Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, undefined, 47, null] -> [15, -22, 47]

function filter(a){
    var output = [];
    var counter = 0;
    for(var i = 0; i < a.length; i++)
    if(a[i]){
        output[counter++] = a[i]
    }
    return output;
}

var input = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(filter(input));


// 4. Write a function that reverses a number. The result must be a number.
// 12345 -> 54321  Output must be a number
function reverse(input){
    var x = 0;
    while (input !== 0) {
        x *= 10;
        x += input % 10;
        input = Math.floor(input / 10);
    }
    console.log(x);
}
reverse(12345);


var a = 12345;

function reversesNumber(numb) {
    var result = 0;
    while(numb > 0) {
        result *= 10; // 0 * 10, 5 * 10
        result += numb % 10; // 0 + 5, 50 + 4 
        numb = numb - numb % 10; //12340, 1230
        numb = numb / 10; // 1234, 123 ... 0.0
    }
    return result;
}
console.log(reversesNumber(a));

console.log(5 % 10);

// 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  
function lastElement(array, number){
    var output = [];
    for(var i = array.length-number; i <= array.length-1; i++){
        output[output.length] = array[i];
    }
    return output
}

var input = [7, 9, 0, -2];
console.log(lastElement(input,2));

// 6. Write a function to create a specified number of elements with pre-filled numeric value array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

function create(number, output){
    var test = [];
    if(!output){
        output = null;
    }
    for(var i = 0; i < number; i++){
        test[test.length] = output;
    }
    return test
}

console.log(create(2));


// 7. Write a function that says whether a number is perfect.
// 28 -> 28 is a perfect number.
// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

var input = 496;

function perfectNumber(number){
    var sum = 0; //1+2+4+7+14
    var perfect;
    for(var i = 1; i < number; i++){
        if(number % i === 0){
            sum += i;
        }
        if(sum === number){
            perfect = "The " + number + " is perfect number";
        } else{
            perfect =  "The " + number + " isn't a perfect number";
        }
    }
    return perfect;
}

console.log(perfectNumber(input));




//8. Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

function find(string, word){
    var counter = 0;
    for(var i = 0; i <= string.length-word.length; i++){
        var p = "";
        for(var j = i; j < i+word.length; j++){
            p += string[j];
        }
        if(word === p){
            counter++
        }
    }
    console.log(word + " was found " + counter  + " time")
}

var input = 'The quick brown fox';
find(input, "fox")

// 9. Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hideEmail(email){
    var newEmail = email[0] + email[1]+ email[2] + "...";
    var p = false; // da li je stiglo do karaktera @
    for(var i = 3; i < email.length; i++){
        if(email[i] === "@"){
            p = true // true je kad stigne do tog karaktera @
        }
        if(p){ // kad stigne do karaktera @ (ako je p = true) vrsi se upis
            newEmail += email[i];

        }
    }
    return newEmail;
}

var something = "myemailaddresssssss@bgit.rs";
console.log(hideEmail(something));


function hideEmail(email){
    var i;
    var newEmail = email[0] + email[1]+ email[2] + "...";
    for(i = 3; i < email.length; i++){
        if(email[i] === "@"){
            break
        }
    }
    for(var j = i; j < email.length; j++){
        newEmail += email[j]
    }
    return newEmail;
}

var something = "myemailaddress@bgit.rs";
console.log(hideEmail(something));

// 10. Write a program to find the most frequent item of an array.
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function frequent(array){
    var counter = 0;
    var maxCounter = 0;
    var item;
    for(var i = 0; i < array.length; i++){
        for(var j = i; j < array.length; j++){
            if(array[i] === array[j]){
                counter++; // broj ponavljanja trenutnog elementa
            }
        }
        if(counter > maxCounter){
            item = array[i]; //nalazi najcesci element areja
            maxCounter = counter; // broji ponavljanja najcesceg elementa
        }
        counter = 0; // resetujemo counter da ne bi racunao i pojave svih prethodnih elementa
    }
    return item;
}

console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));




