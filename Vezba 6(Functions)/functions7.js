// 1. Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numOfchildren, partnerName, geoLocation, jobTitle){
    var fortune = "You will be a " + jobTitle + " in " + geoLocation + " and married to " + partnerName + " with " + numOfchildren + " kids."
    console.log(fortune)
}

tellFortune(2, "Joyce", "Serbia", "teacher");
tellFortune(3, "Joann", "America", "software developer");
tellFortune(4, "Ann", "France", "driver");


// 2. You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.

// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(dogAge, humanAge){
    var dogYears = dogAge * 7;
    var humanYears = humanAge / 7;
    console.log("Your doggie is " + dogYears + " in dog years");
    console.log("Your doggie is " + humanYears + " years old");
}

calculateDogAge(2, 16);
calculateDogAge(4, 21);
calculateDogAge(7, 26);

// 3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply (age, amountPerDay){
    const maxAge = 80;
    var total = (amountPerDay * 365) * (maxAge - age);
    var output = "You will need " + total + " to last you until the ripe old age of " + maxAge + "!";
    console.log(output);
}

calculateSupply(23, 45);
calculateSupply(26, 32);
calculateSupply(21, 7);

// 4. It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius){
    var fahrenheit = celsius * 9 / 5 + 32;
    console.log(celsius + "°C is " + fahrenheit + "°F")
}

celsiusToFahrenheit(26);


function fahrenheitToCelsius(fahrenheit){
    var celsius = (fahrenheit - 32) * 5/9;
    console.log(fahrenheit + "°F is " + celsius + "°C");
}

fahrenheitToCelsius(26);



