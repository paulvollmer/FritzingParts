// scripts/generate_parts_overview_html.js

var fs = require('fs');
var jekyll = require('./utils/jekyllUtils');
var parts = require('../parts.json');

var html = jekyll.defaultHead('Parts Overview');

// TODO: abc navigation
// html += '<a href="#0">0</a>\n';
// html += '<a href="#1">1</a>\n';
// html += '<a href="#2">2</a>\n';
// html += '<a href="#3">3</a>\n';
// html += '<a href="#4">4</a>\n';
// html += '<a href="#5">5</a>\n';
// html += '<a href="#6">6</a>\n';
// html += '<a href="#7">7</a>\n';
// html += '<a href="#8">8</a>\n';
// html += '<a href="#9">9</a>\n';
// html += '<a href="#a">a</a>\n';
// html += '<a href="#b">b</a>\n';
// html += '<a href="#c">c</a>\n';
// html += '<a href="#d">d</a>\n';
// html += '<a href="#e">e</a>\n';
// html += '<a href="#f">f</a>\n';
// html += '<a href="#g">g</a>\n';
// html += '<a href="#h">h</a>\n';
// html += '<a href="#i">i</a>\n';
// html += '<a href="#j">j</a>\n';
// html += '<a href="#k">k</a>\n';
// html += '<a href="#l">l</a>\n';
// html += '<a href="#m">m</a>\n';
// html += '<a href="#n">n</a>\n';
// html += '<a href="#o">o</a>\n';
// html += '<a href="#p">p</a>\n';
// html += '<a href="#q">q</a>\n';
// html += '<a href="#r">r</a>\n';
// html += '<a href="#s">s</a>\n';
// html += '<a href="#t">t</a>\n';
// html += '<a href="#u">u</a>\n';
// html += '<a href="#v">v</a>\n';
// html += '<a href="#w">w</a>\n';
// html += '<a href="#x">x</a>\n';
// html += '<a href="#y">y</a>\n';
// html += '<a href="#z">z</a>\n';

// the parts
html += '<table>\n';
for (var i=0; i<parts.length; i++) {
  html += '<tr>\n';
  html += '<td><a href="{{ site.baseurl }}parts/'+parts[i]+'.html">'+parts[i]+'</a></td>\n';
  html += '<td><a href="{{ site.baseurl }}parts/'+parts[i]+'/icon/'+parts[i]+'_icon.svg">Icon</a></td>\n';
  html += '<td><a href="{{ site.baseurl }}parts/'+parts[i]+'/breadboard/'+parts[i]+'_breadboard.svg">Breadboard</a></td>\n';
  html += '<td><a href="{{ site.baseurl }}parts/'+parts[i]+'/pcb/'+parts[i]+'_pcb.svg">PCB</a></td>\n';
  html += '<td><a href="{{ site.baseurl }}parts/'+parts[i]+'/schematic/'+parts[i]+'_schematic.svg">Schematic</a></td>\n';
  html += '</tr>\n';
};
html += '</table>\n';

fs.writeFileSync('./parts.html', html);

console.log('parts.html file successfully written!');
