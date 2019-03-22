var lib = require("./lib/util");

const ITEMS = require("./lib/items");

// GetContent
exports.function = function(searchTerm) {
  //You can replace with a call to a web api - make sure you map api response to Item model
  var items = ITEMS

  //filter based on searchTerm (note that if you use a web api then filtering can be done in the web API itself)
  if (searchTerm) {
    items = lib.findItems(ITEMS, searchTerm)
  }
  //pick a random item
  var item = null
  if (items.length) {
    var index = Math.floor(items.length * Math.random())
    item = items[index]
  }
  return item
}
