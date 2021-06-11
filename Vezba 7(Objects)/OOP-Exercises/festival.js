"use strict";

(function(){

function Genre(name){
    if(!name){
        throw new Error ("This field is required")
    }
    this.name = name;
    this.getData = function (){
        return (this.name[0] + this.name[name.length - 1]).toUpperCase();
    }
}

function Movie(title, genre, length){
    if(!title || !length){
        throw new Error ("All fields are required")
    }
    if(!genre || !genre instanceof Genre){
        throw new Error ("Invalid input")
    }
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function (){
        return this.title + ", " + this.length + "min, " + this.genre.getData();
    }
}

function Program(date, numberOfMovies){
    if(!date || !numberOfMovies){
        throw new Error ("All fields are required")
    }
    this.date = new Date(date);
    this.numberOfMovies = numberOfMovies;
    this.listOfMovies = [];
    this.addMovie = function (movie){
        this.listOfMovies.push(movie);
    }
}

function Festival(name, TotalNumberOfMovies){
    if(!name || !TotalNumberOfMovies){
        throw new Error ("All fields are required")
    }
    this.name = name;
    this.TotalNumberOfMovies = TotalNumberOfMovies;
    this.ListOfPrograms = [];
    this.addProgram = function (program){
        this.ListOfPrograms.push(program);
    }
}



// TEST
var genre1 = new Genre("fantasy")
var movie1 = new Movie("The Lord Of The Rings", genre1, 178)
var program1 = new Program("12/10/2001", 3);
var festival1 = new Festival("Fox movies", 10);

program1.addMovie(movie1);
festival1.addProgram(program1);

try{
console.log(festival1);
} catch(error){
    console.log(error.message);
}

})();