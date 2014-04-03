// scripts/generate_parts_html.js

var fs = require('fs');
var util = require('./utils');
var parts = require('../parts.json');

for (var i=0; i<parts.length; i++) {
  console.log('generate parts html file. '+parts[i]);
  var html = util.defaultJekyllHead(parts[i]);

  html += '<div id="part">\n';

  // The part svg's
  html += '<table id="part">\n';
  html += '<tr>\n';
  html += '<td>'+partLink('icon', parts[i], 'Icon')+'</td>\n';
  html += '<td>'+partLink('icon', parts[i], 'Breadboard')+'</td>\n';
  html += '<td>'+partLink('icon', parts[i], 'PCB')+'</td>\n';
  html += '<td>'+partLink('icon', parts[i], 'Schematic')+'</td>\n';
  html += '</tr>\n';
  html += '<tr>\n';
  html += '<td>'+partSvg('icon', parts[i])+'</td>\n';
  html += '<td>'+partSvg('breadboard', parts[i])+'</td>\n';
  html += '<td>'+partSvg('pcb', parts[i])+'</td>\n';
  html += '<td>'+partSvg('schematic', parts[i])+'</td>\n';
  html += '</tr>\n';
  html += '</table>\n';

  // Data from the converted .fzp json file
  var fJson = require('../parts/'+parts[i]+'/index.json');
  html += '<h3>Information:</h3>\n';
  html += '<table id="part_info">\n';
  
  html += '<tr>\n';
  html += '<td>fritzing version:</td>\n';
  html += '<td>'+fJson.fritzingVersion+'</td>\n';
  html += '</tr>\n';

  html += '<tr>\n';
  html += '<td>module id:</td>\n';
  html += '<td>'+fJson.moduleId+'</td>\n';
  html += '</tr>\n';
  
  html += '<tr>\n';
  html += '<td>version:</td>\n';
  html += '<td>'+fJson.version+'</td>\n';
  html += '</tr>\n';

  html += '<tr>\n';
  html += '<td>author:</td>\n';
  html += '<td>'+fJson.author+'</td>\n';
  html += '</tr>\n';

  html += '<tr>\n';
  html += '<td>title:</td>\n';
  html += '<td>'+fJson.title+'</td>\n';
  html += '</tr>\n';

  html += '<tr>\n';
  html += '<td>label:</td>\n';
  html += '<td>'+fJson.label+'</td>\n';
  html += '</tr>\n';

  html += '<tr>\n';
  html += '<td>url:</td>\n';
  html += '<td>'+fJson.url+'</td>\n';
  html += '</tr>\n';

  html += '<tr>\n';
  html += '<td>date:</td>\n';
  html += '<td>'+fJson.date+'</td>\n';
  html += '</tr>\n';

  html += '<tr>\n';
  html += '<td>tags:</td>\n';
  html += '<td>'+fJson.tags+'</td>\n';
  html += '</tr>\n';

  html += '<tr>\n';
  html += '<td>description:</td>\n';
  html += '<td>'+fJson.description+'</td>\n';
  html += '</tr>\n';
  
  html += '</table>\n';

  html += '<h3>FZP and JSON Files:</h3>\n';
  html += '<p><a href="./'+parts[i]+'/index.fzp">fzp file</a></p>\n';
  html += '<p><a href="./'+parts[i]+'/index.json">json file</a></p>\n';
  html += '<div/>\n';

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
