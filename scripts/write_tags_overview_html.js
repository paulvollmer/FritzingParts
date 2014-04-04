// scripts/write_tags_overview_html.js

var fs = require('fs');
var jekyll = require('./utils/jekyllUtils');
var tags = require('../tags.json');

var html = jekyll.defaultHead('Tags Overview');

html += '<ul>\n';
// the tags
for (var i=0; i<tags.length; i++) {
  html += '<li><a href="{{ site.baseurl }}tags/'+tags[i]+'.json">'+tags[i]+'</a></li>\n';
};
html += '</ul>\n';

fs.writeFileSync('./tags.html', html);

console.log('tags.html file successfully written!');
