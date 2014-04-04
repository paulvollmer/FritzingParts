// scripts/utils/index.js

exports.sortArray = function(array) {
  var sortedArray = array.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return sortedArray;
};
