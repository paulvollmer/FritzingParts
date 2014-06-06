// scripts/write_tags_json.js


var fs = require('fs');
var tags = require('../tags.json');
var partsData = require('./_temp_parts_data.json');

for (var i=0; i<tags.length; i++) {
  var data = [];

  // search at all part dataset if the current tag exists.
  for (var p=0; p<partsData.length; p++) {
    // console.log('------------------');
    // console.log('tag:  '+tags[i]);
    // console.log('name: '+partsData[p].name);

    if (partsData[p].data.tags != null) {
      //console.log('tags: '+partsData[p].data.tags);

      if (partsData[p].data.tags.indexOf(tags[i]) !== -1) {
        console.log(tags[i], 'treffer! ', partsData[p].name, ' -- tags:', partsData[p].data.tags);

        data.push(partsData[p].name);
      };
    };
  };
  
  
  // if in a tag an "/" exists, replace it with an underline.
  var filename = tags[i].split('/');
  if (filename.length !== 1) {
    console.log('warning tag contains a slash! -->'+tags[i]);
    console.log('we save the tag file under an other name! (replaced the "/" by an "_")');
    // console.log(filename);
    // console.log(filename.length);
    tmpFilename = '';
    for (var j = 0; j < filename.length; j++) {
      tmpFilename += filename[j]+'_';
      // console.log(filename[j]);
    };
    filename = tmpFilename;
    // console.log(tmpFilename);
  } else {
    filename = filename[0];
  }
  //console.log(filename);


  fs.writeFileSync('./tags/'+filename+'.json', JSON.stringify(data, null, 2));
};
