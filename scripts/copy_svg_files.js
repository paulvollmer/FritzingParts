// scripts/copy_svg_files.js

var fs = require('fs');
var parts = require('../parts.json');

// this variable will be used to save the error messages to it.
var errorReport = '!!!THIS IS AN ERROR REPORT!!!\n\n';


for (var i=0; i<parts.length; i++) {
  //console.log(parts[i]);
  var fzpJson = require('../parts/'+parts[i]+'/index.json');

  copyHelper(fzpJson.views.icon.image, parts[i], 'icon');
  copyHelper(fzpJson.views.breadboard.image, parts[i], 'breadboard');
  copyHelper(fzpJson.views.pcb.image, parts[i], 'pcb');
  copyHelper(fzpJson.views.schematic.image, parts[i], 'schematic');
};

fs.writeFileSync('COPY_ERROR_REPORT.txt', errorReport);


function copyHelper(filepath, part, type) {
  try  {
    fs.writeFileSync('./parts/'+part+'/'+type+'/'+part+'_'+type+'.svg', fs.readFileSync('./fritzing/fritzing/parts/svg/core/'+filepath))
  } catch(e) {
    console.log(e);
    errorReport += e+'\n';
  }
}
