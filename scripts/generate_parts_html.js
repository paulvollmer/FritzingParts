// scripts/generate_parts_html.js

var fs = require('fs');
var util = require('./utils');
var parts = require('../parts.json');

for (var i=0; i<4/*parts.length*/; i++) {
  console.log('generate parts html file. '+parts[i]);
  var html = util.defaultJekyllHead(parts[i]);

  html += '<div id="part">';

  // The part svg's
  html += '<table id="part">';
  html += '<tr>';
  html += '<td>'+partLink('icon', parts[i], 'Icon')+'</td>';
  html += '<td>'+partLink('icon', parts[i], 'Breadboard')+'</td>';
  html += '<td>'+partLink('icon', parts[i], 'PCB')+'</td>';
  html += '<td>'+partLink('icon', parts[i], 'Schematic')+'</td>';
  html += '</tr>';
  html += '<tr>';
  html += '<td>'+partSvg('icon', parts[i])+'</td>';
  html += '<td>'+partSvg('breadboard', parts[i])+'</td>';
  html += '<td>'+partSvg('pcb', parts[i])+'</td>';
  html += '<td>'+partSvg('schematic', parts[i])+'</td>';
  html += '</tr>';
  html += '</table>';

  // Data from the converted .fzp json file
  var fJson = require('../parts/'+parts[i]+'/index.json');
  html += '<h3>Information:</h3>';
  html += '<table id="part_info">';
  
  html += '<tr>';
  html += '<td>fritzing version:</td>';
  html += '<td>'+fJson.fritzingVersion+'</td>';
  html += '</tr>';

  html += '<tr>';
  html += '<td>module id:</td>';
  html += '<td>'+fJson.moduleId+'</td>';
  html += '</tr>';
  
  html += '<tr>';
  html += '<td>version:</td>';
  html += '<td>'+fJson.version+'</td>';
  html += '</tr>';

  html += '<tr>';
  html += '<td>author:</td>';
  html += '<td>'+fJson.author+'</td>';
  html += '</tr>';

  html += '<tr>';
  html += '<td>title:</td>';
  html += '<td>'+fJson.title+'</td>';
  html += '</tr>';

  html += '<tr>';
  html += '<td>label:</td>';
  html += '<td>'+fJson.label+'</td>';
  html += '</tr>';

  html += '<tr>';
  html += '<td>url:</td>';
  html += '<td>'+fJson.url+'</td>';
  html += '</tr>';

  html += '<tr>';
  html += '<td>date:</td>';
  html += '<td>'+fJson.date+'</td>';
  html += '</tr>';

  html += '<tr>';
  html += '<td>tags:</td>';
  html += '<td>'+fJson.tags+'</td>';
  html += '</tr>';

  html += '<tr>';
  html += '<td>description:</td>';
  html += '<td>'+fJson.description+'</td>';
  html += '</tr>';
  
  html += '</table>';

  html += '<h3>FZP and JSON Files:</h3>';
  html += '<p><a href="./'+parts[i]+'/index.fzp">fzp file</a></p>';
  html += '<p><a href="./'+parts[i]+'/index.json">json file</a></p>';
  html += '<div/>';

  fs.writeFileSync('./parts/'+parts[i]+'.html', html);
}


function partLink(type, part, linkName) {
  var html = '<a href="/parts/'+part+'/'+type+'/'+part+'_'+type+'.svg">'+linkName+'</a>';
  return html;
}

function partSvg(type, part) {
  var html = '<img id="'+type+'_svg" src="'+part+'/'+type+'/'+part+'_'+type+'.svg">';
  return html;
}
