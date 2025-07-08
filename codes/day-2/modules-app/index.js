var utilityExports = require('./utility')

console.log('welcome to node js')
//console.log(utilityExports);
var addResult = utilityExports.addFn(12, 13)
console.log(addResult);

var subResult = utilityExports.subFn(12, 3)
console.log(subResult);
//console.log(module);