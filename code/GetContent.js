const UTIL = require("./lib/util");
const CONTENT = require("./content");

// GetContent
exports.function = function (searchTerm) {
  //You can replace with a call to a web api - make sure you map api response to content model
  var content = CONTENT

  //filter based on searchTerm (note that if you use a web api then filtering can be done in the web API itself)
  if (searchTerm) {
    content = UTIL.findContent(content, searchTerm)
  }
  
  //pick a random content
  var chosenContent;
  if (content.length) {
    var index = Math.floor(content.length * Math.random())
    chosenContent = content[index]
  }

  // return content if exists, else null (No Result)
  if (chosenContent) {
    return {
      fact: chosenContent.text,
      image: chosenContent.image
    }
  } else {
    return null;
  }
}
