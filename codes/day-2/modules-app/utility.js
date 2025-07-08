function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

module.exports = {
    addFn: add,
    subFn: subtract
}


// define('utility', [], function () {
//     function add(a, b) {
//         return a + b
//     }

//     function subtract(a, b) {
//         return a - b
//     }
//     exports = { addFn: add, subFn: subtract }
// })
//console.log(module);

// var obj = {
//     name: 'anil',
//     id: 1,
//     salary: 1000,
//     print: function () {
//         return this.name + this.id + this.salary
//     }
// }