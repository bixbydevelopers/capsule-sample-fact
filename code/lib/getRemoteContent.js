exports.getDadJoke = getDadJoke

var http = require('http')

function getDadJoke() {
  // Very simple example of calling an API for a fact/jokke
  // Tbis is a free and open web service - please do not abuse. See https://icanhazdadjoke.com/ for more information
  // Note Bixby http API is asyncronous - no need for a promise or callback
  var response = http.getUrl('https://icanhazdadjoke.com/', {
    format: 'json',
    headers: {
      accept: 'application/json'
    }
  });
  
  return response.joke;
}
