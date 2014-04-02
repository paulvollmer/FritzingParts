// scripts/copy_svg_files.js

var fs = require('fs');
var parts = require('../parts.json');

for (var i=0; i<parts.length; i++) {
  //console.log(parts[i]);
  var fzpJson = require('../parts/'+parts[i]+'/index.json');

  var breadboardFilepath = fzpJson.views.breadboard.image;
  try  {
    fs.writeFileSync('./parts/'+parts[i]+'/breadboard/'+parts[i]+'.svg', fs.readFileSync('./fritzing/fritzing/parts/svg/core/'+breadboardFilepath))
  } catch(e) {
    console.log('breadboard: '+e);
  }

  var pcbFilepath = fzpJson.views.pcb.image;
  try  {
    fs.writeFileSync('./parts/'+parts[i]+'/pcb/'+parts[i]+'.svg', fs.readFileSync('./fritzing/fritzing/parts/svg/core/'+pcbFilepath))
  } catch(e) {
    console.log('pcb: '+e);
  }

  var schematicFilepath = fzpJson.views.schematic.image;
  try  {
    fs.writeFileSync('./parts/'+parts[i]+'/schematic/'+parts[i]+'.svg', fs.readFileSync('./fritzing/fritzing/parts/svg/core/'+schematicFilepath))
  } catch(e) {
    console.log('schematic: '+e);
  }

  var iconFilepath = fzpJson.views.icon.image;
  try  {
    fs.writeFileSync('./parts/'+parts[i]+'/icon/'+parts[i]+'.svg', fs.readFileSync('./fritzing/fritzing/parts/svg/core/'+iconFilepath))
  } catch(e) {
    console.log('icon: '+e);
  }

};
