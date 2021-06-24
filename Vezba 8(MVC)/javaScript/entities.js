function MovieFestival(){
    this.listOfAllMovies = [];
    this.listOfAllPrograms = [];
}

MovieFestival.prototype.addMovies = function(movie){
    this.listOfAllMovies.push(movie);
}

MovieFestival.prototype.addProgram = function(program){
    this.listOfAllPrograms.push(program);
}

function Movie(name, length, genre){
    this.name = name;
    this.length = length;
    this.genre = genre;
};

Movie.prototype.getData = function (){
    var abbrevation = (this.genre[0] + this.genre[this.genre.length-1]).toUpperCase();
    return this.name + ", " + this.length + "min, " + abbrevation;
}


var movie = new Movie("Titanic", 123, "Drama");
console.log(movie.getData())

function Program(date){
    this.date = new Date(date);
    this.listOfMovies = [];
}

Program.prototype.addMovie = function (movie) {
    if (!movie || !(movie instanceof Movie)){
        console.log("invalid movie input");
    }
    this.listOfMovies.push(movie);
}

Program.prototype.duration = function() {
    return this.listOfMovies.length;
}

Program.prototype.getData = function() {
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    return day + "." + month + "." + year;
}

var program = new Program("Oct 23 1990");
console.log(program.getData());