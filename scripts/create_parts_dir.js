// scripts/create_parts_dir.js

var fs = require('fs');
var parts = require('../parts.json');

console.log('create a parts directory');
fs.mkdirSync('./parts', 0777);

console.log('generate a folder for each part and into this directory, create an icon, breadboard, pcb and schematic dir.');
for (var i=0; i<parts.length; i++) {
  //console.log(parts[i]);
  fs.mkdirSync('./parts/'+parts[i], 0777);
  fs.mkdirSync('./parts/'+parts[i]+'/breadboard', 0777);
  fs.mkdirSync('./parts/'+parts[i]+'/icon', 0777);
  fs.mkdirSync('./parts/'+parts[i]+'/schematic', 0777);
  fs.mkdirSync('./parts/'+parts[i]+'/pcb', 0777);
};

console.log('Parts directories successfully written!');
