// scripts/write_tags_overview_json.js
//
// this is the object structure we want to generate.
// 
//    tags: [
//      foo,
//      bar,
//      ...
//    ]

var fs = require('fs');
var utils = require('./utils');
var parts = require('../parts');
var partsData = require('./_temp_parts_data.json');

var tags = [];

for (var i = 0; i < parts.length; i++) {
  var data = partsData[i].data;
  if (data.tags !== null) {
    //console.log('data.tags:', data.tags);

    for (var j=0; j<data.tags.length; j++) {
      //console.log('data.tags['+j+']', data.tags[j]);
      
      // check if the tag exists...
      if (tags.length !== 0) {
        if (tags.indexOf(data.tags[j]) === -1) {
          //console.log('new TAG: '+data.tags[j]);
          tags.push(data.tags[j]);
        } else {
          //console.log('TAG exists: '+data.tags[j]);
        }
      }
      // hey this is the first part, add all the tags to out tags array!
      else {
        //console.log('first file');
        tags.push(data.tags[j]);
      }
      
    };
  };
};

// console.log('\ntags array');
// console.log('--------------------');
// console.log(tags);


console.log('Total tags: '+tags.length);
var sortedTags = utils.sortArray(tags);
fs.writeFileSync('./tags.json', JSON.stringify(sortedTags, null, 2));
