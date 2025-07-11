// function global() {
const divide = (a, b) => {
    const p = new Promise(
        //executor function
        //Promise passes the reference of "resolve" and "reject" methods to the function exactly in this order. you just need to declare two arguments in that function.
        function (resolveFn, rejectFn) {
            const res = a / b
            if (res === Infinity) {
                const err = new Error('divisor should not be zero')
                rejectFn(err)
            }
            resolveFn(res)
        }
    )
    return p
}

function add(a, b) { return a + b }

const divResPromise = divide(12, 0)
// divResPromise
//     .then(
//         function (data) { console.log(data) },
//         function (err) { console.log(err) }
//     ).finally()
divResPromise
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })
    .finally(() => { console.log('something else') })



const addRes = add(12, 3)
console.log(addRes);
// }
// main()
console.log('end of code...');
// console.log(global);


// const { readFile } = require('fs')
// readFile('', (err, data) => { if (err) console.log(err); if (data) console.log(data); })