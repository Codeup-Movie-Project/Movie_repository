"use strict";

const moviesAjax = $.ajax("https://peaceful-forest-loaf.glitch.me/movies");

 function onSuccess(data) {
     console.log(data);
 }
 function onFail(jqXhr) {
     console.log("Check your file path.");
 }
 function onAlways(data) {
     alert("Loading");
 }
moviesAjax.done(onSuccess);

moviesAjax.done(function(movies) {

    movies.forEach(function (movie) {
        var content = "";
        if (movie.title !== undefined) {
            content += "<h1>" + movie.title + "</h1>"
            console.log(content);
            $('#main').append(content);
        }
    });
});

