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

// MovieFestival.prototype.getProgramByDate = function(date){
//     var i = 0;
//     this.listOfAllPrograms.forEach(function(el, k){
//         console.log(el.getData() === date)
//         if(el.getData() === date){
//             i = k;
//         }
//     })
//     return i;
// }


function Movie(name, length, genre){
    this.name = name;
    this.length = parseInt(length);
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
    var sandra = day + "." + month + "." + year;
    if(this.duration() === 0){
        return sandra + " Program to be announced";
    }
        return sandra + ", " + this.duration() + " movies, " + "duration: " + this.getProgramLength() + "min";
}

Program.prototype.getProgramLength = function(){
    var length = 0;
    this.listOfMovies.forEach(function(el){
        length += el.length;
    })
    return length;
}