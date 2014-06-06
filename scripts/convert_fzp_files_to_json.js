// scripts/copy_parts_fzp_files.js

var fs = require('fs');
var xml2js = require('xml2js').parseString;
var parts = require('../parts.json');

for (var i=0; i<parts.length; i++) {
  console.log('convert '+parts[i]+'.fzp');

  
  var data = fs.readFileSync('./fritzing/fritzing/pdb/core/'+parts[i]+'.fzp', 'utf-8');
  // convert xml to json
  xml2js(data, function (err, result) {
    //console.log('result:', JSON.stringify(result, null, 2));

    // the part object
    var obj = {};
    obj.fritzingVersion = result.module.$.fritzingVersion || null;
    obj.moduleId = result.module.$.moduleId || null;
    obj.version = result.module.version || null;
    obj.author = result.module.author || null;
    obj.title = result.module.title || null;
    obj.label = result.module.label || null;
    obj.url = result.module.url || null;
    obj.date = result.module.date || null;
    obj.tags = result.module.tags[0].tag || null;
    obj.description = result.module.description || null;
    // properties
    obj.properties = [];
    if (result.module.properties !== undefined && result.module.properties.length > 0) {
      for (var a=0; a<result.module.properties[0].property.length; a++) {
        //console.log('properties', JSON.stringify(result.module.properties[0].property[i], null, 2));
        obj.properties.push({
          name: result.module.properties[0].property[a].$.name,
          value: result.module.properties[0].property[a]._
        });
      };
    };
    // views
    obj.views = {
      icon: {
        image: result.module.views[0].iconView[0].layers[0].$.image,
        layer: viewLayerHelper(result.module.views[0].iconView[0].layers[0].layer)
      },
      breadboard: {
        image: result.module.views[0].breadboardView[0].layers[0].$.image,
        layer: viewLayerHelper(result.module.views[0].breadboardView[0].layers[0].layer)
      },
      pcb: {
        image: result.module.views[0].pcbView[0].layers[0].$.image,
        layer: viewLayerHelper(result.module.views[0].pcbView[0].layers[0].layer)
      },
      schematic: {
        image: result.module.views[0].schematicView[0].layers[0].$.image,
        layer: viewLayerHelper(result.module.views[0].schematicView[0].layers[0].layer)
      }
    };

    // connectors
    obj.connectors = [];
    //console.log(result.module.connectors);
    if (result.module.connectors[0].connector !== undefined) {
      for (var b=0; b<result.module.connectors[0].connector.length; b++) {
        // console.log('----------------------');
        // console.log(result.module.connectors[0].connector[i]);
        // console.log('----------------------');
        obj.connectors.push({
          id: result.module.connectors[0].connector[b].$.id,
          name: result.module.connectors[0].connector[b].$.name,
          type: result.module.connectors[0].connector[b].$.type,
          description: result.module.connectors[0].connector[b].description,
          views: result.module.connectors[0].connector[b].views //[]
        });

        // // connector views
        // for (var c=0; c<result.module.connectors[0].connector[b].views.length; c++) {
        //   //console.log( JSON.stringify(result.module.connectors[0].connector[b].views[c], null, 2) );
        //   var tmpObj = {};
          
        //   // breadboardView
        //   if (result.module.connectors[0].connector[b].views[c].breadboardView !== undefined) {
        //     //console.log(result.module.connectors[0].connector[b].views[c].breadboardView[0].p);
        //     // tmpObj.breadboard = {
        //     //   layer: result.module.connectors[0].connector[b].views[c].breadboardView[0].p[0].$.layer,
        //     //   svgId: result.module.connectors[0].connector[b].views[c].breadboardView[0].p[0].$.svgId,
        //     //   terminalId: result.module.connectors[0].connector[b].views[c].breadboardView[0].p[0].$.terminalId
        //     // };
        //     tmpObj.breadboard = viewConnectorHelper(result.module.connectors[0].connector[b].views[c].breadboardView[0].p);
        //   };
        //   // // schematicView
          
        //   // // pcbView
        //   obj.connectors[b].views.push(tmpObj);
        //   console.log(obj.connectors[b].views);
        // };

      };

    };

    //console.log('obj', obj);
    fs.writeFileSync('./parts/'+parts[i]+'/index.json', JSON.stringify(obj, null, 2));
    //console.log('file written..../parts/'+parts[i]+'/index.json');
  });
};

function viewLayerHelper(data) {
  //console.log('data: ', JSON.stringify(data, null, 2));
  var obj = [];
  if (data !== undefined && data.length > 0) {
    for (var i = 0; i < data.length; i++) {
      obj.push(data[i].$.layerId);
    };
  };
  return obj;
};

// function viewConnectorHelper(data) {
//   console.log('data:', data);
//   var obj;
//   return obj;
// };
