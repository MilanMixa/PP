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