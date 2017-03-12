var path = require('path');

console.log('normalization=' + path.normalize('/test/test1//test3/test4/test5/'));

console.log('joint path=' + path.join('/test','test2'));

console.log('resolve=' + path.resolve('.'));

console.log('ext name=' + path.extname('main.js'));
