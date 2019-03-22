exports.findItems = findItems

function findItems(items, searchTerm) {
   var matches = []
   //a lot can be improved here...
   for (var i=0; i<items.length; i++) {
      if (items[i].tags) {
        for (var j=0; j<items[i].tags.length; j++) {
          if (searchTerm.toLowerCase() == items[i].tags[j].toLowerCase()) {
             matches.push(items[i])
             break
          }
        }
      }
   }
   return matches
}
