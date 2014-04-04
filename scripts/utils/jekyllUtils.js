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
  html += '<!-- THIS FILE WAS GENERATED !!!DO NOT EDIT!!! -->\n\n';
  return html
}
