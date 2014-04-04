// scripts/write_tags_json.js

// at the moment this is totally bullshit implementation!!!
// 
// at every loop we read the parts index.json and check if the tag exists....
// but it works :)


// save the parts index.json object to an array
// this is temporary used.
var parts = require('../parts.json');
var partsJson = [];

for (var i = 0; i < parts.length; i++) {
  //console.log('part: '+parts[i]);
  var partData = require('../parts/'+parts[i]+'/index.json');
  partsJson.push({name: parts[i], data: partData});
};



var fs = require('fs');
var tags = require('../tags.json');

for (var i=0; i<tags.length; i++) {
  var data = [];

  // search at all part dataset if the current tag exists.
  for (var p=0; p<partsJson.length; p++) {
    // console.log('------------------');
    // console.log('tag:  '+tags[i]);
    // console.log('name: '+partsJson[p].name);

    if (partsJson[p].data.tags != null) {
      //console.log('tags: '+partsJson[p].data.tags);

      if (partsJson[p].data.tags.indexOf(tags[i]) !== -1) {
        console.log(tags[i], 'treffer! ', partsJson[p].name, ' -- tags:', partsJson[p].data.tags);

        data.push(partsJson[p].name);
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
