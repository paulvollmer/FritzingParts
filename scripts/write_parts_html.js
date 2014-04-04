// scripts/generate_parts_html.js

var fs = require('fs');
var jekyll = require('./utils/jekyllUtils');
var parts = require('../parts.json');

for (var i=0; i<parts.length; i++) {
  console.log('generate parts html file. '+parts[i]);
  var html = jekyll.defaultHead(parts[i]);

  html += '<div id="part">\n';

  // The part svg's
  html += '<table id="part">\n';
  html += '<tr>\n';
  html += '<td>'+partLink('icon',       parts[i], 'Icon')+'</td>\n';
  html += '<td>'+partLink('breadboard', parts[i], 'Breadboard')+'</td>\n';
  html += '<td>'+partLink('pcb',        parts[i], 'PCB')+'</td>\n';
  html += '<td>'+partLink('schematic',  parts[i], 'Schematic')+'</td>\n';
  html += '</tr>\n';
  html += '<tr>\n';
  html += '<td>'+partSvg('icon',       parts[i])+'</td>\n';
  html += '<td>'+partSvg('breadboard', parts[i])+'</td>\n';
  html += '<td>'+partSvg('pcb',        parts[i])+'</td>\n';
  html += '<td>'+partSvg('schematic',  parts[i])+'</td>\n';
  html += '</tr>\n';
  html += '</table>\n';

  // Data from the converted .fzp json file
  var fJson = require('../parts/'+parts[i]+'/index.json');
  html += '<h3>Information:</h3>\n';
  html += '<table id="part_info">\n';
  
  html += infoItem('Fritzing Version', fJson.fritzingVersion);
  html += infoItem('Module ID', fJson.moduleId);
  html += infoItem('Version', fJson.version);
  html += infoItem('Author', fJson.author);
  html += infoItem('Title', fJson.title);
  html += infoItem('Label', fJson.label);
  html += infoItem('Url', fJson.url);
  html += infoItem('Date', fJson.date);

  if (fJson.tags !== null) {
    html += '<tr>\n';
    html += '<td>tags:</td>\n';
    html += '<td>\n';
    html += '<ul>\n';
    for (var j = 0; j < fJson.tags.length; j++) {
      html += '<li>'+fJson.tags[j]+'</li>\n';
    };
    html += '</ul>\n';
    html += '</td>\n';
    html += '</tr>\n';
  }

  html += infoItem('Description', fJson.description);

  html += '</table>\n';

  html += '<h3>FZP and JSON Files:</h3>\n';
  html += '<p><a href="{{ page.baseurl }}'+parts[i]+'/index.fzp">fzp file</a></p>\n';
  html += '<p><a href="{{ page.baseurl }}'+parts[i]+'/index.json">json file</a></p>\n';
  html += '<div/>\n';

  fs.writeFileSync('./parts/'+parts[i]+'.html', html);
}


function partLink(type, part, linkName) {
  var html = '<a href="{{ page.baseurl }}parts/'+part+'/'+type+'/'+part+'_'+type+'.svg">'+linkName+'</a>';
  return html;
}

function partSvg(type, part) {
  var html = '<img id="'+type+'_svg" src="'+part+'/'+type+'/'+part+'_'+type+'.svg">';
  return html;
}

function infoItem(name, obj) {
  var html = '<tr>\n';
  html += '<td>'+name+':</td>\n';
  if (obj !== null) {
    html += '<td>'+obj+'</td>\n';
  } else {
    html += '<td>Not set at the moment.</td>\n';
  }
  html += '</tr>\n';
  return html;
}
