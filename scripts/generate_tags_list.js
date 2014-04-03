// scripts/list_tags.js

var fs = require('fs');
var parts = require('../parts');

// this is the object structure we want to generate.
// 
// tags: [
//   foo: {file1, file2, ...},
//   foo2: {...},
//   ...
// ]
var tags = [];

for (var i = 0; i < parts.length; i++) {
  var fJson = require('../parts/'+parts[i]+'/index.json');
  if (fJson.tags !== null) {
    //console.log('fJson.tags:', fJson.tags);

    for (var j=0; j<fJson.tags.length; j++) {
      //console.log('fJson.tags['+j+']', fJson.tags[j]);
      
      // check if the tag exists...
      if (tags.length !== 0) {
        // for (var t=0; t<tags.length; t++) {
        //   if (tags[t].name === fJson.tags[j]) {
        //     console.log('TAG exists');
        //   } else {
        //     console.log('New TAG');
        //     tags.push({
        //       name: fJson.tags[j]
        //       //part: parts[i]
        //     });
        //   }
        // };
        if (tags.indexOf(fJson.tags[j]) === -1) {
          //console.log('new TAG: '+fJson.tags[j]);
          tags.push(fJson.tags[j]);
        } else {
          //console.log('TAG exists: '+fJson.tags[j]);
        }
      }
      // hey this is the first part, add all the tags to out tags array!
      else {
        //console.log('first file');
        tags.push(fJson.tags[j]);
      }
      
    };
  };
};

// console.log('\ntags array');
// console.log('--------------------');
// console.log(tags);


console.log('Total tags: '+tags.length);

fs.writeFileSync('./tags.json', JSON.stringify(tags, null, 2));
