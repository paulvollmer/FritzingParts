// scripts/write_parts_json.js
//
// List all files from the "fritzing/pdb/core" directory
// (exclude the placeholder.txt file)

var fs = require('fs');


// Read the directory
fs.readdir('./fritzing/fritzing/pdb/core', function(err, parts) {
  
  // Find and remove the "placeholder.txt" item from this array.
  var i = parts.indexOf('placeholder.txt');
  if(i != -1) {
    parts.splice(i, 1);
  }
  
  // remove the .fzp suffix
  for (var i=0; i<parts.length; i++) {
    var tmp = parts[i].split('.fzp');
    parts[i] = tmp[0];
  }
  
  // stringify and save to file.
  var partsJson = JSON.stringify(parts, null, 2);
  fs.writeFileSync('./parts.json', partsJson);
});
