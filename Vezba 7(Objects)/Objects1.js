// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

function duplicateArray(array) {
  var output = [];
  array.forEach(function (element) {
    output.push(element, element);
  });
  return output;
}
var arr = [2, 4, 7, 11, -2, 1];
var dupArr = duplicateArray(arr);
console.log(dupArr);



// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function deleteDuplicate(array){
        var output = [];
        for(var i = 0; i < array.length; i++){
            if(!output.includes(array[i])){
                output.push(array[i])
            } else
            continue;
        }
        return output;
    }
    

var someArr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var arr = deleteDuplicate(someArr);
console.log(arr)


// 3.Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
//A.
var someArr = [1, 2, 9, 2, 1];
function oddOrNot (array) {
    return (array.length % 2 === 1);
}
var result = oddOrNot(someArr);
console.log(result);

 
// B.Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

var input = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

function countLess(array){
  if(array.length % 2 === 0){
    return "Error"
  }
  var counter = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] < array[parseInt(array.length / 2)]){
      counter++
    }
  }
  return counter;
}

console.log(countLess(input));

// ili ovako

var input = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

function countLess(array){
  if(array.length % 2 === 0){
    return "Error"
  }
  var middleIndex = Math.floor(array.length/2) // nasli smo middle index
  var counter = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] < array[middleIndex]){
      console.log(i)
      counter++
    }
  }
  return counter;
}
console.log(countLess(input));

//ili ovako

var printArray = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
function countLess (array) {
    var counter = 0;
    if (array.length % 2 === 0) {
        return "Error";
    }
    var middleIndex = Math.floor(array.length / 2);
    var middleElement = array[middleIndex];
    array.forEach(function (element) {
        if (element < middleElement) {
            counter++;
        }
    });
    return counter;
}
var output = countLess(printArray);
console.log(output);

// 4.Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

var arrStr = [1, 4, -2, 11, 8, 1, -2, 3];
function arrayIntoObject (array) {
    var min = array[0];
    array.forEach(function (el) {
        if (el < min) {
            min = el;
        }
    });
    var object = {
        minValue : min,
        minLastIndex : array.lastIndexOf(min)
    };
    return object;
}
var outp = arrayIntoObject(arrStr);
console.log(outp);


// 5.Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]
// A.
function lessThanGiven (array, el) {
  var newArr = array.filter(function (element){
      return element < el;
  });
  return newArr;
}
var input = [2, 3, 8, -2, 11, 4];
var el = 6;
var outputtt = lessThanGiven(input, el);
console.log(outputtt);

// B. Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

var someArray = ["JavaScript", "Programming", "fun", "product"];
function substringElements (array) {
    var newArr = array.filter (function (element) {
        var lower = element.toLowerCase();
        return (lower.slice(0, 3) === "pro");
    });
    return newArr;
}
var res = substringElements(someArray);
console.log(res);

// C. Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 


// 6.
// A. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]

var shoppingList = [
  {name: "apples", price: 100}, 
  {name: "milk", price: 80}, 
  {name: "bananas", price: 152}
   ];

// B. Write a function that calculates the total price of your shopping list. 
function calculates(List){
  var s = 0;
  List.forEach(function (item){
    s+=item.price;
  });
  return s;
}
console.log("Total price:", calculates(shoppingList));

// C. Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
function average(List){
  var avg = calculates(List) / List.length;
  return avg.toFixed(3);
}

console.log("Average price:", average(shoppingList));
// D. Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 
function mostExpensive(List){
  var max = List[0].price;
  // var upper;
  List.forEach(function (item){
    if(item.price > max){
      max = item.price;
      upper = item.name.toUpperCase();
    }
  });
  return upper;
};
console.log("Most Expensive:", mostExpensive(shoppingList));


// 7.
// A. Write a function that checks if a given string is written in all capitals.
function isUpperCase(string){
  if(string === string.toUpperCase()){
    return "string is written all in capitals";
  } else{
    return "string isn't written all in capitals"
  }
};
// console.log(isUpperCase("hello"));
// console.log(isUpperCase("WORLD"));
// B. Write a function that checks if a given string contains any digits.
function isDigit(string){
  if(!isNaN(string)){ /// ubaciti for petlju i parse int
    return "string contains numbers"
  } else{
    return "string doesn't contain numbers";
  }
};

// console.log(isDigit("milan23"));

// C. Write a function that checks if a given string is a valid hexadecimal color.
function isHexadecimal(string){
  if(typeof string === 'string' && (string.length >= 3 && string.length <=6) && !isNaN(Number("0x" + string))){ /// 0x = Hexadecimal 0b = Binary 0o = Octal
    return "string is a valid hexadecimal color";
  } else {
    return "string isn't a valid hexadecimal color";
  }
};

console.log(isHexadecimal("AAbFjd"));

// D. Write a function that checks if a given number belongs to the interval from 1900 to 2018. 

function doesBelong(number){
  if(number === Math.min(2018, Math.max(1900, number))){
    return "the number belongs to the interval 1900 - 2018";
  } else {
    return "the number doesn't belong to the interval 1900 - 2018";
  }
}

// console.log(doesBelong(2800));

// E. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
function validator(){
    var o = {
    stringValidator: isUpperCase("asdasf"),
    passwordValidator: isDigit("asda564sd"),
    colorValidator: isHexadecimal("asd444"),
    yearValidator: doesBelong(2020)
    }

    return o;
};

console.log(validator());

/*8. Write a function that calculates a number of days to your birthday.
Input: 25 February
Output: 5 days*/

var date1 = new Date();
var date2 = new Date("03/06/2022");
var differenceInTime = date2.getTime() - date1.getTime();
var differenceInDay = Math.floor(differenceInTime / (1000 * 3600 * 24));
console.log(differenceInDay);

/*9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds*/

var departure = "8:22:13";
var arrival = "11:43:22";
function trip (dep, arr) {
    var currentDep = new Date();
    var currentArr = new Date();
    dep = dep.split(":");
    arr = arr.split(":");
    currentDep.setUTCHours(parseInt(dep[0]));
    currentDep.setUTCMinutes(parseInt(dep[1]));
    currentDep.setUTCSeconds(parseInt(dep[2]));
    currentArr.setUTCHours(parseInt(arr[0]));
    currentArr.setUTCMinutes(parseInt(arr[1]));
    currentArr.setUTCSeconds(parseInt(arr[2]));
    var timeTravel = currentArr - currentDep;
    var h = Math.floor(timeTravel / (1000 * 3600));
    var m = Math.floor(timeTravel / (1000 * 60));
    m %= 60;
    var s = Math.floor(timeTravel / 1000);
    s %= 60;
    return h + " hours " + m + " minutes " + s + " seconds!"
}
var output = trip(departure, arrival);
console.log(output);

/*10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.*/

function Point (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}
var pointsSpace = new Point (3, 5, 1);
var secondPoint = new Point (4, 2, 9);

//b. Write a function that calculates the distance between two points in the space.

function distance (p1, p2) {
    var result = Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y) + (p1.z - p2.z) * (p1.z - p2.z));
    return result.toFixed(3);
}
var pointResult = distance (pointsSpace, secondPoint);
console.log(pointResult);

// 11.
//a. Write a function that generates a random integer value between 5 and 20.

function randomInteger (min, max) {
    return ((max - min) * Math.random()) + min;
}
var result = randomInteger(5, 20);

//b. Write a function that generates a random integer value between 50 and 100.

var result1 = randomInteger(50, 100);
console.log(result1);

//c. Write a function which expects a number and a callback generator function and
//returns an array of numbers produced by the generator function.

function arrayOfRandoms (numb, func) {
    var arr = [];
    console.log(func);
    for (var i = 0; i < numb; i++) {
        arr[i] = func(i+1, 10*(i+1));
    }
    return arr;
}
console.log(arrayOfRandoms(7, randomInteger));

/*12. Write a function that shuffles the elements of a given array.
Input: [3, 6, 11, 2, 9, 1]
Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)*/

var myarray = [3, 6, 11, 2, 9, 1];
//console.log(Math.random(myarray));
function shuffle (array) {
    array.forEach(function (el, i){
        var randomIndex = parseInt(Math.random() * array.length);
        var p = array[randomIndex];
        array[randomIndex] = array[i];
        array[i] = p;
    })
    return array;
}
var output = shuffle(myarray);
console.log(output);