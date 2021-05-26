// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

var a = "Republic Of Serbia";
function alphabetizingString (string) {
    var arr = string.split(" ");
    var newArr = [];
    arr.forEach(function(el) {
        var sortEl = el.split("").sort().join("");
        newArr.push(sortEl);
    }) 
    return newArr.join(" ");
}
var result2= alphabetizingString (a);
console.log(result2);


// 4. Write a function to split a string and convert it into an array of words.
// "John Snow" -> [ "John", "Snow" ]

var arr = "John Snow"
function stringSplit(string){
    return string.split(" ")
};

var result = stringSplit(arr);
console.log(result);

// 5. Write a function to convert a string to its abbreviated form.
// "John Snow" -> "John S."

var string = "John Snow";
function abbreviatedString (string) {
    var splitString = string.split(" ");
    splitString[1] = splitString[1].charAt(0) + ".";
    return splitString.join(" ");
}
var output = abbreviatedString(string);
console.log(output);

// 6.Write a function that adds string to the left or right of string, by replacing it’s characters.
// "0000", ‘123’, "l" -> 0123
// "00000000", ‘123’, "r" -> 12300000

function addLeftRight (string0, string1, place) {
    var zeroLength = string0.length;
    var oneLength = string1.length;
    var mainLength = zeroLength - oneLength; 
    if (place === "l") {
        return string0.slice(0, mainLength).concat(string1);
    } else if (place === "r") {
        return string1.concat(string0.slice(0, mainLength));
    }
}
console.log(addLeftRight("00000000", "123", "r"));

// 6.Write a function to capitalize the first letter of a string and returns modified string.
// "js string exercises" -> "Js string exercises"

var str = "js string exercises";

function capitalize (string){
    return string[0].toUpperCase() + string.slice(1);
};

console.log(capitalize(str));

//// ILI OVAKO

var str = "js string exercises";

function capitalize (string){
    return string[0].toUpperCase().concat(string.slice(1)) ;
};

console.log(capitalize(str));


// 7.Write a function to hide email addresses to protect them from unauthorized users.
// 	"somerandomaddress@example.com" -> "somerand...@example.com"

var email = "somerandomaddress@example.com";

function hideEmail(email){
    var emailArr = email.split("@");
    var firstPart = emailArr[0];
    var toLength = firstPart.length / 2;
    return firstPart.slice(0, toLength).concat("...@", emailArr[1]);
}

var output = hideEmail(email);
console.log(output);



// 8. Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

var swap = "The Quick Brown Fox";
function swapCharacter (string) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperArr = upper.split("");
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var lowerArr = lower.split("");
    var arrString = string.split("");
    var space = " ";
    var result = [];
    arrString.forEach(function (el){
        for (var i = 0; i < upperArr.length; i++) {
            if (el === upperArr[i]) {
                result.push(el.toLowerCase());
            } else if (el === lowerArr[i]) {
                result.push(el.toUpperCase());
            } else if (el === space) {
                result.push(el);
                break;
            }
        }
    })
    return result.join("");
}
console.log(swapCharacter(swap)); 
