// scripts/generate_parts_dir.js


var fs = require('fs');
var xml2js = require('xml2js').parseString;
var parts = require('../parts.json');


// create a parts directory
fs.mkdirSync('./parts', 0777);

// generate a folder for each part
var totalParts = parts.length;
for (var i=0; i<totalParts; i++) {
  var dirName = parts[i].split('.fzp');
  console.log(dirName[0]);
  fs.mkdirSync('./parts/'+dirName[0], 0777);
  fs.mkdirSync('./parts/'+dirName[0]+'/breadboard', 0777);
  fs.mkdirSync('./parts/'+dirName[0]+'/icon', 0777);
  fs.mkdirSync('./parts/'+dirName[0]+'/schematic', 0777);
  fs.mkdirSync('./parts/'+dirName[0]+'/pcb', 0777);

  // copy the pdb file to the part folder
  console.log('> copy .fzp file');
  copy('./fritzing/fritzing/pdb/core/'+parts[i]+'.fzp', './parts/'+dirName[0]+'/index.fzp');

  // generate the part index json file
  pdbToJson(parts[i]+'.fzp', function(data) {
    var jsonObj = {
      fritzingVersion: data.module.$.fritzingVersion,
      moduleId: data.module.$.moduleId,
      version: data.module.version,
      author: data.module.author,
      title: data.module.title,
      date: data.module.date,
      tags: data.module.tags,
      properties: data.module.properties,
      description: data.module.description,
      views: {
        icon: data.module.views[0].iconView,
        breadboard: data.module.views[0].breadboardView,
        pcb: data.module.views[0].pcbView,
        schematic: data.module.views[0].schematicView,
      },
      connectors: data.module.connectors
    };
    //console.log('result', jsonObj);
    console.log('> save json file');
    fs.writeFileSync('./parts/'+dirName[0]+'/index.json', JSON.stringify(jsonObj, null, 2), 'utf-8');

    console.log('> copy svg files');
    // copy('./fritzing/fritzing/parts/svg/core/'+data.module.views[0].breadboardView[0].layers[0].$.image,
    //      './parts/'+dirName[0]+'/breadboard/'+dirName[0]+'.svg');
  });
};


/**
 * return the parts data (pdb) as javascript object.
 */
function pdbToJson(file, callback) {
  //console.log('file', file);
  var data = fs.readFileSync('./fritzing/fritzing/pdb/core/'+file, 'utf-8');
  //console.log('data', data);
  xml2js(data, function (err, result) {
    callback(result);
  });
};

function copy(from, to) {
  fs.writeFileSync(to, fs.readFileSync(from));
}