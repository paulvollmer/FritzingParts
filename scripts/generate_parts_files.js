// scripts/generate_part_files.js

var fs = require('fs');
var xml2js = require('xml2js').parseString;
var parts = require('../parts.json');


var totalParts = 10; //parts.length;
for (var i=0; i<totalParts; i++) {
  
  // copy the pdb file to the part folder
  console.log('> copy .fzp file '+parts[i]);
  copy('./fritzing/fritzing/pdb/core/'+parts[i]+'.fzp', './parts/'+parts[i]+'/index.fzp');

  // generate the part index json file
  // pdbToJson(parts[i]+'.fzp', function(data) {
  //   console.log('> save json file');
  //   fs.writeFileSync('./parts/'+parts[i]+'/index.json', JSON.stringify(data, null, 2), 'utf-8');

  //   console.log('> copy svg files');
  //   copy('./fritzing/fritzing/parts/svg/core/'+data.views.breadboard,
  //        './parts/'+parts[i]+'/breadboard/'+parts[i]+'.svg');
  //   copy('./fritzing/fritzing/parts/svg/core/'+data.views.icon,
  //        './parts/'+parts[i]+'/icon/'+parts[i]+'.svg');
  //   copy('./fritzing/fritzing/parts/svg/core/'+data.views.pcb,
  //        './parts/'+parts[i]+'/pcb/'+parts[i]+'.svg');
  //   copy('./fritzing/fritzing/parts/svg/core/'+data.views.schematic,
  //        './parts/'+parts[i]+'/schematic/'+parts[i]+'.svg');
  // });
};


/**
 * return the parts data (pdb) as javascript object.
 *
function pdbToJson(file, callback) {
  var data = fs.readFileSync('./fritzing/fritzing/pdb/core/'+file, 'utf-8');
  // convert xml to json
  xml2js(data, function (err, result) {
    //console.log('result:', JSON.stringify(result, null, 2));
    var obj = {
      fritzingVersion: result.module.$.fritzingVersion,
      moduleId: result.module.$.moduleId,
      version: result.module.version,
      author: result.module.author,
      title: result.module.title,
      date: result.module.date,
      tags: result.module.tags[0].tag,
      properties: result.module.properties,
      description: result.module.description,
      views: {
        icon: result.module.views[0].iconView[0].layers[0].$.image,
        breadboard: result.module.views[0].breadboardView[0].layers[0].$.image,
        pcb: result.module.views[0].pcbView[0].layers[0].$.image,
        schematic: result.module.views[0].schematicView[0].layers[0].$.image,
      },
      connectors: result.module.connectors[0].connector
    };

    // for (var i = 0; i < result.module.connectors[0].connector.length; i++) {
    //   obj.connectors = {
    //     id: result.module.connectors[0].connector[i].$.id,
    //     type: result.module.connectors[0].connector[i].$.type,
    //     name: result.module.connectors[0].connector[i].$.name,
    //     description: result.module.connectors[0].connector[i].description,
    //     views: null
    //   };

    //   // views
    //   for (var j=0; j<result.module.connectors[0].connector[i].views.length; j++) {
    //     console.log(result.module.connectors[0].connector[i].views[j] );
    //     //{
    //     //   breadboardView: result.module.connectors[0].connector[i].views
    //     //   schematicView:
    //     //   pcbView: 
    //     // }
    //   };
    //   //console.log(result.module.connectors[0].connector[i]);
    // };

    //console.log('obj', obj);
    callback(obj);
  });
};*/

// function copy(from, to) {
//   fs.readFile(from, function(err, data) {
//     if(err) console.log('error!!! '+from);
//     else fs.writeFileSync(to, data);
//   });
// }



function copy(from, to) {
  fs.writeFileSync(to, fs.readFileSync(from));
}