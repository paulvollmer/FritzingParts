// generate.js

var fs = require('fs');
var xml2js = require('xml2js').parseString;

console.log('read the parts directory');
fs.readdir('./fritzing/fritzing/pdb/core', function(err, parts) {
  
  console.log('write the parts.json file');
  var partsJson = JSON.stringify(parts, null, 2);
  fs.writeFileSync('./parts.json', partsJson, 'utf-8');

  console.log('create a parts directory');
  fs.mkdirSync('./parts', 0777);

  console.log('generate files for each part');
  var totalParts = 10; //parts.length;
  for (var i=0; i<totalParts; i++) {
    var dirName = parts[i].split('.fzp');
    console.log('part '+dirName[0]);
    fs.mkdirSync('./parts/'+dirName[0], 0777);
    fs.mkdirSync('./parts/'+dirName[0]+'/breadboard', 0777);
    fs.mkdirSync('./parts/'+dirName[0]+'/icon', 0777);
    fs.mkdirSync('./parts/'+dirName[0]+'/schematic', 0777);
    fs.mkdirSync('./parts/'+dirName[0]+'/pcb', 0777);

    // copy the pdb file to the part folder
    fs.writeFileSync('./parts/'+dirName[0]+'/index.pdb', fs.readFileSync('./fritzing/fritzing/pdb/core/'+parts[i]));
    // generate the part index json file
    pdbToJson(parts[i], function(data) {
      console.log('result', data);
      fs.writeFileSync('./parts/'+dirName[0]+'/index.json', JSON.stringify(data, null, 2), 'utf-8');
    });
  };

});

/**
 * return the parts data (pdb) as javascript object.
 */
function pdbToJson(file, callback) {
  console.log('file', file);
  var data = fs.readFileSync('./fritzing/fritzing/pdb/core/'+file, 'utf-8');
  //console.log('data', data);
  xml2js(data, function (err, result) {
    callback(result);
  });
};
