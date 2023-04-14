var UTIL = {  
  findContent: function(items, searchTerm) {
    var matches = [];
    searchTerm = searchTerm.toLowerCase();

    for (var i = 0; i < items.length; i++) {
      if (items[i].tags) {
        for (var j = 0; j < items[i].tags.length; j++) {
          if (searchTerm == items[i].tags[j].toLowerCase()) {
            matches.push(items[i]);
            break;
          }
        }
      }
    }
    return matches;
  }
}

export default UTIL