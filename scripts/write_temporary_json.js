// scripts/create_temporary_json.js
//
// save the parts index.json object to an array, save it.
// this is temporary used by some other scripts...

var fs = require('fs');
var parts = require('../parts.json');

// the array we mant to save to file.
var partsJson = [];

for (var i = 0; i < parts.length; i++) {
  console.log('Read part index.json file of "'+parts[i]+'"');
  var partData = require('../parts/'+parts[i]+'/index.json');
  partsJson.push({name: parts[i], data: partData});
};

console.log('Stringify and save to file.');
fs.writeFileSync('./scripts/_temp_parts_data.json', JSON.stringify(partsJson, null, 2));

console.log('Ready, "_temp_parts_data.json" file successsfully written!');
