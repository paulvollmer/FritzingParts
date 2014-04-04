// scripts/utils/jekyllUtils.js

/**
 * Returns the default jekyll yaml head.
 */
exports.defaultHead = function(title) {
  var html = '---\n';
  html += 'layout: default\n';
  html += 'title: '+title+'\n';
  html += '---\n';
  html += '\n';
  return html
}
