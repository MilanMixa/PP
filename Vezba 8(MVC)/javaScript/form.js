var title = document.getElementById("movie-title");
var length = document.getElementById("movie-length");
var genre = document.getElementById("movie-genre");
var movieButton = document.querySelector(".movie-form form .button");
var movieParagraph = document.querySelector(".create-movie");
console.log(movieButton)

movieButton.addEventListener("click", function createMovie () {
    var movieValue = title.value;
    var lengthValue = length.value;
    var genreValue = genre.value;
    console.log(movieValue)
    var movie = new Movie(movieValue, lengthValue, genreValue);
    console.log(movie);
})
