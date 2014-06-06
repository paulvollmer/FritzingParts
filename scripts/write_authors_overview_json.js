// scripts/write_authors_json.js

var fs = require('fs');
var utils = require('./utils');
var partsData = require('./_temp_parts_data.json');

var authors = [];

for (var i = 0; i < partsData.length; i++) {
  //console.log(partsData[i].name);

  var currentAuthor = partsData[i].data.author;
  // check if't not null
  if (currentAuthor !== null) {
    // ..and it's array contains only one author...
    if (currentAuthor.length === 1) {

      if (i === 0) {
        console.log('hey, the first part/author', currentAuthor[0]);
        authors.push(currentAuthor[0]);
      }
      else {
        // check if the author does not exists...
        if (authors.indexOf(currentAuthor[0]) === -1) {
          console.log('ok, new author found: '+currentAuthor[0]);
          authors.push(currentAuthor[0]);
        }
      }
    }
    else {
      console.log('more than one author! TODO: handle this!!!', currentAuthor);
    }
  }

};

var sortedAuthors = utils.sortArray(authors);
fs.writeFileSync('./authors.json', JSON.stringify(sortedAuthors, null, 2));
console.log('File successfully written!');

console.log('authors:', sortedAuthors);
console.log('total authors: ', sortedAuthors.length);
//console.log('total processed parts: '+partsData.length);
