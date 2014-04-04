// scripts/generate_parts_overview_html.js

var fs = require('fs');
var jekyll = require('./utils/jekyllUtils');
var parts = require('../parts.json');

var html = jekyll.defaultHead('Parts Overview');

html += '<table>\n';
// the parts
for (var i=0; i<parts.length; i++) {
  html += '<tr>\n';
  html += '<td><a href="{{ site.baseurl }}parts/'+parts[i]+'.html">'+parts[i]+'</a></td>\n';
  html += '<td><a href="{{ site.baseurl }}parts/'+parts[i]+'/icon/'+parts[i]+'_icon.svg">icon</a></td>\n';
  html += '<td><a href="{{ site.baseurl }}parts/'+parts[i]+'/breadboard/'+parts[i]+'_breadboard.svg">breadboard</a></td>\n';
  html += '<td><a href="{{ site.baseurl }}parts/'+parts[i]+'/pcb/'+parts[i]+'_pcb.svg">pcb</a></td>\n';
  html += '<td><a href="{{ site.baseurl }}parts/'+parts[i]+'/schematic/'+parts[i]+'_schematic.svg">schematic</a></td>\n';
  html += '</tr>\n';
};
html += '</table>\n';

fs.writeFileSync('./parts.html', html);

console.log('parts.html file successfully written!');
