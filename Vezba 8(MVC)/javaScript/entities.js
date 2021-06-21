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
}

Program.prototype.getData = function() {
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    return day + "." + month + "." + year;
}

var program = new Program("Oct 23 1990");
console.log(program.getData());