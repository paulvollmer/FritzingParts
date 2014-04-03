// scripts/generate_parts_overview_html.js

var fs = require('fs');
var util = require('./utils');
var parts = require('../parts.json');

var html = util.defaultJekyllHead('Parts Overview');

html += '<table>';

// the parts
for (var i=0; i<parts.length; i++) {
  html += '<tr>';
  html += '<td><a href="/parts/'+parts[i]+'.html">'+parts[i]+'</a></td>';
  html += '<td><a href="/parts/'+parts[i]+'/icon/'+parts[i]+'_icon.svg">icon</a></td>';
  html += '<td><a href="/parts/'+parts[i]+'/breadboard/'+parts[i]+'_breadboard.svg">breadboard</a></td>';
  html += '<td><a href="/parts/'+parts[i]+'/pcb/'+parts[i]+'_pcb.svg">pcb</a></td>';
  html += '<td><a href="/parts/'+parts[i]+'/schematic/'+parts[i]+'_schematic.svg">schematic</a></td>';
  html += '</tr>';
};
html += '<table>';

fs.writeFileSync('./parts.html', html);
