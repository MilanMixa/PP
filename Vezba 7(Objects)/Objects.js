// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var myCoffee = {
    name: "nescafe",
    strength: "medium" ,
    flavor: "clasic",
    milk: 2,
    sugar:  false,
};

console.log(myCoffee)

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var favoriteMovie = {
    name: "Lord Of The Rings",
    actor: {
        firstname: "Orlando",
        lastname: "Bloom",
    },
    director: {
        firstname: "Peter",
        lastname: "Jackson",
    },
    genre: "Drama",
    popularity: 10
};

console.log(favoriteMovie.actor.lastname);
console.log(favoriteMovie.director.firstname);


// 3.Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project's
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.


function createObject (description,programingLanguage, git, develop){
    var object = {
        description: description,
        programing: programingLanguage,
        gitRepository: git,
        devolopment: develop,
        printGit: function () {
            return git;
        },
        isJavaScript: function () {
            return programingLanguage === 'JavaScript'
           
        },
        isDevelopment: function () {
            return develop ? 'project is in development' : 'project is not in development'
        }
    };
    return object;
}

// var project = createObject("Exercise", "JavaScript", "https://github.com/6urrp/BIT-PP", false );
// console.log(project.isJavaScript());


var newProject = createObject("New Exercise", ["html", "css", "JavaScript"], "https://github.com/6urrp/BIT-PP", true);
console.log(newProject.printGit());


// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared for 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that deletes given ingredient from the list of ingredients.

function culinaryRecipe(name, type, complexity, list, prepTime, prepInstruction, a){
    var myRecipe = {
        name: name,
        cuisine: type,
        complex: complexity,
        ingredients: list,
        preparingTime: prepTime,
        instructions: prepInstruction,
        printAllIngredients: function(){
            return list.toString();
        },
        check: function(){
            if(prepTime <= 15){
                return true
            } else{
                return false
            }
        },
        delete: function(list, a){
            newList = [];
            for(var i = 0; i < list.length; i++){
                if(list[i] !== a){
                    newList[newList.length] = list[i];
                }
            }
            return newList;
        }

    }
    return myRecipe;
}


var tiramisu = culinaryRecipe(
    "Tiramisu", 
    "Italian", 
    2, 
    ["biscuits", "mascarpone", "whipped cream", "coffee", "sugar", "cocoa"], 
    30,
    "Whisk three of the egg whites until stiff, then set aside. Whisk the egg yolks with the sugar until pale and voluminous, then whisk in the mascarpone, a little at a time, until smooth and well combined – you don't want lumps of cheese."
    );

console.log(tiramisu.delete(tiramisu.ingredients, "coffee"));

