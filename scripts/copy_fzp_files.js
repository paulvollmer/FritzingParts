// scripts/copy_parts_fzp_files.js

var fs = require('fs');
var parts = require('../parts.json');

for (var i=0; i<parts.length; i++) {
  console.log('copy .fzp file '+parts[i]);
  fs.writeFileSync('./parts/'+parts[i]+'/index.fzp', fs.readFileSync('./fritzing/fritzing/pdb/core/'+parts[i]+'.fzp'));
};
