"use strict";

(function(){

function Genre(name){
    if(!name){
        throw new Error ("This field is required")
    }
    this.name = name;
    this.getDate = function (){
        return (this.name[0] + this.name[name.length - 1].toUpperCase());
    }
}

function Movie(title, genre, length){
    if(!title || !length){
        throw new Error ("All fields are required")
    }
    if(!genre ||genre instanceof Genre){
        throw new Error ("Invalid input")
    }
    this.title = title;
    this.genre = genre;
    this.length = length;
}

function Program(date, numberOfMovies){
    if(!date || !numberOfMovies){
        throw new Error ("All fields are required")
    }
    this.date = date;
    this.numberOfMovies = numOfMovies;
    this.listOfMovies = [];
}

function Festival(name, TotalNumberOfMovies){
    if(!name || !TotalNumberOfMovies){
        throw new Error ("All fields are required")
    }
    this.name = name;
    this.TotalNumberOfMovies = TotalNumberOfMovies;
    this.ListOfPrograms = [];
}



// TEST
var genre1 = new Genre("fantasy")
try{
console.log(genre1.getData())
} catch(error){
    console.log(error.message);
}

})();