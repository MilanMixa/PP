// Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -

var a=3;
var b=-7;
var c=2;
// if (a>0 && b>0 && c>0)
// {
//        console.log("The sign is +");
// }
// else if (a<0 && b<0 && c<0)
//         {
//           console.log("The sign is -");
//         }
//         else if (a>0 && b<0 && c<0)
//         {
//           console.log("The sign is +");
//         }
//         else if (a<0 && b>0 && c<0)
//         {
//           console.log("The sign is +");
//         }
//         else
//         {
//           console.log("The sign is -");
//         }

if(a*b*c>0){
    console.log("The sign is +")
} else {
    console.log("The sign is -")
}
		

// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
// console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

a=-5;
b=-2;
c=-6;
d= 0;
f=-1;
// if (a>b && a>c && a>d && a>f)
// {
//     console.log(a);
// }
// else if (b>a && b>c && b>d && b>f)
// {
//     console.log(b);
// }
// else if (c>a && c>b && c>d && c>f)
// {
//     console.log(c);
// }
// else if (d>a && d>c && d>b && d>f)
// {
//     console.log(d);
// }
// else
// {
//     console.log(f);
// }

var max = a;

if(max<b){
    max=b;
}

if(max<c){
    max=c;
}

if(max<d){
    max=d;
}

if(max<f){
    max=f;
}
console.log(max);




// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

var x= 0;
var y=-1;
var z= 4;
if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
}   


// Task 5. Write a program that compares two numbers and displays the larger. Display the result in
// the console.

var a = 5;
var b = 10;

if(a>b){
    console.log(a)
} else if(b>a){
    console.log(b)
} else {
    console.log("numbers are equal")
}

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F

var C = 60;
var F = 140;

var toFar = (9*C/5) + 32;
var toCel = (F - 32)*5/9;
console.log(C+ " Celsius is " + toFar + " Fahrenheit");
console.log(F+ " Fahrenheit is " + toCel + " Celsius");

// ILI OVAKO

var C = 60;
var F = (9*C/5) + 32;
console.log(F);



// Task 7. Write a JavaScript program to get the difference between a given number and 13, if
// the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11 Sample Input: 32
// Output : 2 Output : 38

var given = 32;
var number = 13;

if(number<given){
    console.log((given-number)*2);
} else {
    console.log(number-given);
}


// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17 Output : 48

var number1 = 5;
var number2 = 10;

if(number1===number2){
    console.log((number1+number2)*3);
} else {
    console.log(number1+number2);
}

// Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

var num1 = 20;
var num2 = 30;

if(num1+num2===50 || num1===50 || num2===50){
    console.log(true);

} else {
    console.log(false);
};


// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400

var broj = 15;
if(broj>=20 && broj <=100){
    console.log("Output: " + broj + " je izmedju 20 <==> 100");
} else if (broj>=100 && broj <=400){
    console.log("Output: " + broj + " je izmedju 100 <==> 400");
} else {
    console.log("Output: Not true");
};


// Task 11. Write a program to check if the
// number is divisible by 2. If it
// is, print even, if not, print
// odd.

var num3 = 20;
if (num3 % 2 === 0){
    console.log("The number" + num3 +"is even")
} else {
    console.log("The number" + num3 +"is odd")
};


// Task 12. Write a program to check if the
// number is divisible by 3 and 5.
// If it is, print that number.

// Sample numbers: 15, 12 (check one at the time)

// Output: 15

var num4 = 15;
var num5 = 12;

if (num4 % 3 === 0 && num4 % 5 === 0){
    console.log("The number " + num4 + " is divisible by 3 and 5")
} else if (num4 % 3 === 0){
    console.log("The number " + num4 + " is divisible by 3 and but not 5")
} else if  (num4 % 5 === 0){
    console.log("The number " + num4 + " is not divisible by 3 but is divisible by 5")
} else {
    console.log("The number " + num4 + " is not divisible by 3 and 5")
}
    