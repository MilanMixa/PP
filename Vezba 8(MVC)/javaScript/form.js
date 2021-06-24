var festival = new MovieFestival();

var title = document.getElementById("movie-title");
var length = document.getElementById("movie-length");
var genre = document.getElementById("movie-genre");
var movieButton = document.querySelector(".movie-form form .button");
var movieParagraph = document.querySelector(".create-movie");
var errorMovie = document.getElementById("error-text");
var errorProgram = document.getElementById("error-date");
var inputDate = document.getElementById("program-date");
var programButton = document.getElementById("program-button");
var movieList = document.getElementById("movie-select");
var programList = document.getElementById("program-select");
var programCreate = document.getElementById("create-program");
var movieProgram = document.getElementById("movie-program");
console.log(movieButton)


function createMovie (){
    errorMovie.innerHTML = "";
    if(!title.value || !length.value || !genre.value){
        errorMovie.innerHTML = "All fields are required!";
        return -1;
    }
    var movieValue = title.value;
    var lengthValue = length.value;
    var genreValue = genre.value;
    genreValue = (genreValue[0] + genreValue[genreValue.length-1]).toUpperCase();

    var movie = new Movie(movieValue, lengthValue, genreValue);

    var li = document.createElement("li");
    li.innerHTML = title.value +", " + length.value + "min, " + genreValue;
    movieParagraph.appendChild(li);

    var option = document.createElement("option");
    option.innerHTML = title.value +", " + length.value + "min, " + genreValue;
    option.value = title.value +", " + length.value + "min, " + genreValue;
    movieList.appendChild(option);

    festival.addMovies(movie);
}

function createProgram(){
    var program = new Program(inputDate.value)
    
    if(!inputDate.value){
        errorProgram.innerHTML = "Please fili out the date field";
        return -1;
    }
    var li = document.createElement("li");
    li.innerHTML = program;
    programCreate.appendChild(li);
    
    var option = document.createElement("option");
    option.innerHTML = program;
    programList.appendChild(option);
}

function addMovieToProgram(){
    var movieInput = movieList.options[movieList.selecetedIndex].text;
    var programInput = programList.options[programList.selecetedIndex].text;

}

movieButton.addEventListener("click", createMovie);
programButton.addEventListener("click", createProgram);
movieProgram.addEventListener("click", addMovieToProgram);
