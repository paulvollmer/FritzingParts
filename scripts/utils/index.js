// scripts/utils/index.js

exports.defaultJekyllHead = function(title) {
  var html = '---\n';
  html += 'layout: default\n';
  html += 'title: '+title+'\n';
  html += '---\n';
  html += '\n';
  return html
}
