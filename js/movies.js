"use strict";

const moviesAjax = $.ajax("https://peaceful-forest-loaf.glitch.me/movies");

 function onSuccess(data) {
     console.log(data);
 }
 function onFail(jqXhr) {
     console.log("Check your file path.");
 }
 function onAlways() {
     $('#main').html("Loading...");
 }
moviesAjax.done(onSuccess);
moviesAjax.done(onAlways)

moviesAjax.done(function(movies) {

    movies.forEach(function (movie) {
        var content = "";
        if (movie.title || movie.rating !== undefined) {
            content += "<h1>" + movie.title + "</h1>"
            content += "<h1>" + movie.rating + "</h1>"
            console.log(content);
            $('#main').append(content);
        }
    });
});

//let users post movie titles

    // const moviesApiURL = "https://peaceful-forest-loaf.glitch.me/movies";
    // let inputtedMovie = movieTitle.value;
    // let inputtedRating = movieRating.value;
    // let newPost = {
    //     "title": inputtedMovie,
    //     "rating": inputtedRating,
    // }
    // let options = {
    //     method: "POST",
    //     headers: {
    //         'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify(newPost),
    // }


const moviesApiURL = "https://peaceful-forest-loaf.glitch.me/movies";
    let movieTitle = document.querySelector('#mtitle');
    let movieRating = document.querySelector('#mrating');
        let inputtedMovie = movieTitle.value;
            console.log(inputtedMovie);
        let inputtedRating = movieRating.value;
            console.log(inputtedRating);

        let newPost = {
            "title": inputtedMovie,
            "rating": inputtedRating,
        }
        let options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newPost),
        }
        fetch(moviesApiURL, options).then(function (response) {
            console.log(response)
        })







