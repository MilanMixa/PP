// 1.Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

function check(array, element){
    var result = "No";
    for(var i = 0; i < array.length; i++){
        if(element === array[i]){
            result = "Yes"
        }
    }
    return result;
}

var a = [5, -4.2, 18, 7];
var e= 3;
console.log(check(a, e));


// 2.Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiplies(input){
    var output = [];
    for(var i = 0; i < input.length; i++){
        if(input[i] > 0){
         output[output.length] = input[i] * 2;
        }else{
            output[output.length] = input[i];
        }
    }
    return output;
}

var array = [-3, 11, 5, 3.4, -8];
console.log(multiplies(array));

// 3.Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function minimum(array){
    var min = Infinity; // uzeli smo najveci postojeci broj
    var index = 0;
    for(var i = 0; i < array.length; i++){
        if (array[i] < min) { // da li je trenutni index manji od varijable min
            min = array[i] // ako jeste min postaje trenutni element areja
            index = i; // uzimamo njegovu poziciju u areju
        }
    }
    console.log(min, index)
}
var input = [4, 2, 2, -1, 6]
minimum(input);

// 4.Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function secondMinimum(array){
    var min = Infinity; //4, 2
    var newMin = 0; //infinity, 4
    for(var i = 0; i < array.length; i++){
        if (array[i] < min) { 
            newMin = min; // infinity , 4 , 2
            min = array[i]  // 4 ,2 , -1
        }
    }
    console.log(newMin)
}
var input = [4, 2, 2, -1, 6]
secondMinimum(input);


// 5.Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16


function calculate(array){
    var x = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] > 0){
            x += array[i]
        }
    }
    return x
}

var input = [3, 11, -5, -3, 2];
console.log(calculate(input));

// 6.Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.

function symetric(array){
    var p = "The array is not symetric";
    for(var start = 0, end = array.length - 1; start < end; start++, end--){
        if(array[start] === array[end]){
            p = "The array is symmetric."
        } 
    }
    return p 
}
var input = [2, 4, -2, 7, -2, 4, 2];
console.log(symetric(input));


// 7.Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwine(array, array1){
    var d = [];
    for(var i = 0, j = 0; i < array.length, j < array1.length; i++, j++){
        d[d.length] = array[i]
        d[d.length] = array1[j]
    }
    return d
}

var arrays = [4, 5, 6, 2], array = [3, 8, 11, 9];
console.log(intertwine(arrays, array));


// 8.Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenate(array, array1){
    var output = [];
    for(var i = 0; i < array.length; i++){
        output[output.length] = array[i]
    }
    for(var j = 0; j < array1.length; j++){
        output[output.length] = array1[j]
    }
    return output
}

var arrays = [4, 5, 6, 2], array = [3, 8, 11, 9];
console.log(concatenate(arrays, array));

// ILI OVAKO

function concatinate (array, array1) {
    var output = [];
    output = array;
    for (var i = 0; i < array1.length; i++) {
        output[output.length] = array1[i];
    }
    return output;
}
var array =  [4, 5, 6, 2];
var array1 = [3, 8, 11, 9];
console.log(concatinate(array,array1));

// 9.Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]


function deleteElement(array, element){
    var output = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] === element){
          continue
        } else{
            output[output.length] = array[i]
        }
    }
    return output
}

var e = 2, a = [4, 6, 2, 8, 2, 2]
console.log(deleteElement(a, e))

/// ILI OVAKO

function deleteElement(array, element){
    var output = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] !== element){
            output[output.length] = array[i]
        } 
    }
    return output
}
var e = 2, a = [4, 6, 2, 8, 2, 2]
console.log(deleteElement(a, e))


// 10.Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function insertElement(element, position, array){
    var output = [];
    if(position > array.length){
        console.log("Error")
    }
    for(var i = 0; i < array.length; i++){
        if(position === i){
            output[output.length] = element;  // u istoj iteraciji dodajemo element (78)
            output[output.length] = array[i]  // nakon dodatog elementa output.length nam se povecava(i dalje smo u istoj iteraciji) i dodaje nam array[i] tj 3ci element input areja
            // console.log(output)
        } else {
            output[output.length] = array[i]
        }
    }
    return output
}

var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8];
console.log(insertElement(e, p, a));