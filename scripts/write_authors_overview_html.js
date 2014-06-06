// scripts/write_authors_overview_html.js

var fs = require('fs');
var jekyll = require('./utils/jekyllUtils');
var authors = require('../authors.json');

var html = jekyll.defaultHead('Authors Overview');

html += '<p>This is a list of all authors...</p>\n';
html += '<ul>\n';
// the authors
for (var i=0; i<authors.length; i++) {
  html += '<li><a href="{{ site.baseurl }}authors/'+authors[i]+'.json">'+authors[i]+'</a></li>\n';
};
html += '</ul>\n';

fs.writeFileSync('./authors.html', html);

console.log('authors.html file successfully written!');
