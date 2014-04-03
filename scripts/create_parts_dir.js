// scripts/generate_parts_dir.js

var fs = require('fs');
var parts = require('../parts.json');

// create a parts directory
fs.mkdirSync('./parts', 0777);

// generate a folder for each part
for (var i=0; i<parts.length; i++) {
  //console.log(parts[i]);
  fs.mkdirSync('./parts/'+parts[i], 0777);
  fs.mkdirSync('./parts/'+parts[i]+'/breadboard', 0777);
  fs.mkdirSync('./parts/'+parts[i]+'/icon', 0777);
  fs.mkdirSync('./parts/'+parts[i]+'/schematic', 0777);
  fs.mkdirSync('./parts/'+parts[i]+'/pcb', 0777);
};
