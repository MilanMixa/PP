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


function createMovie (){
    errorMovie.innerHTML = "";
    if(!title.value || !length.value || !genre.value){
        errorMovie.innerHTML = "All fields are required!";
        return -1;
    }
    var movieValue = title.value;
    var lengthValue = length.value;
    var genreValue = genre.value;

    var movie = new Movie(movieValue, lengthValue, genreValue);

    festival.addMovies(movie);
    var index = festival.listOfAllMovies.length - 1;

    var li = document.createElement("li");
    li.innerText = movie.getData();
    movieParagraph.appendChild(li);

    var option = document.createElement("option");
    option.innerText = movie.getData();
    option.setAttribute("value", index);
    movieList.appendChild(option);

}

function createProgram(){
    var input = new Date(inputDate.value);
    var program = new Program(input);
    errorProgram.innerHTML = "";
    
    if(isNaN(input.getTime())){
        errorProgram.innerHTML = "Please fili out the date field";
        return -1;
    }

    if(new Date - input > 0){
        errorProgram.innerHTML = "Invalid date";
        return -1;
    }

    var hasProgramWithSameDate = festival.listOfAllPrograms.some(function(program){
        return input.getTime() === program.date.getTime();
    }) 

    if(hasProgramWithSameDate){
        errorProgram.innerText = "Program with same date already exists";
        return -1;
     }
    
    festival.addProgram(program);
    var index = festival.listOfAllPrograms.length - 1;

    var li = document.createElement("li");
    li.innerHTML = program.getData();
    li.setAttribute("id", "item-" + index)
    programCreate.appendChild(li);
    
    var option = document.createElement("option");
    option.innerHTML = program.formatDate();
    option.setAttribute("value", index);
    programList.appendChild(option);

    
    inputDate.value = "";
}

function addMovieToProgram(){
    var movieInput = movieList.value;
    var programInput = programList.value;
  
    var program = festival.listOfAllPrograms[programInput];
    var movie = festival.listOfAllMovies[movieInput];
    
    var li = document.querySelector("#item-" + programInput);
    li.innerText = program.getData();
    

    program.addMovie(movie);
    

    //var program = festival.listOfAllPrograms[festival.getProgramByDate(programList.value)];
}

movieButton.addEventListener("click", createMovie);
programButton.addEventListener("click", createProgram);
movieProgram.addEventListener("click", addMovieToProgram);
