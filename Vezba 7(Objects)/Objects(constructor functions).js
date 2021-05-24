// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared for 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that deletes given ingredient from the list of ingredients.

function CulinaryRecipe(name, type, complexity, list, prepTime, prepInstruction ){ // culinaryrecipe je klasa(klasno programiranje)
        this.name = name;
        this.cuisine = type;
        this.complex = complexity;
        this.ingredients = list;
        this.preparingTime = prepTime;
        this.instructions = prepInstruction;
        this.printAllIngredients = function(){
            return list.toString();
        },
        this.check = function(){
            if(prepTime <= 15){
                return true
            } else{
                return false
            }
        },
        this.delete = function(ingredient){
            newList = [];
            for(var i = 0; i < this.ingredients.length; i++){ // .this da bi uzeli sastoji ovog kulinarskog recepta(culinary recipe) this.nesto odnosi se na clanicu klase(property ili funkciju klase) .. bez this. nesto mora biti deklarisano, ako je promenljiva mora negde da postoji
                if(this.ingredients[i] !== ingredient){
                    newList[newList.length] = this.ingredients[i];
                }
            }
            this.ingredients = newList; 
        }
}


var tiramisu = new CulinaryRecipe(
    "Tiramisu", 
    "Italian", 
    2, 
    ["biscuits", "mascarpone", "whipped cream", "coffee", "sugar", "cocoa"], 
    30,
    "Whisk three of the egg whites until stiff, then set aside. Whisk the egg yolks with the sugar until pale and voluminous, then whisk in the mascarpone, a little at a time, until smooth and well combined – you don't want lumps of cheese."
    );
console.log(tiramisu.delete("coffee"));

