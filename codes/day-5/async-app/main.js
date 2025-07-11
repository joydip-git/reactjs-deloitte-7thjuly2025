const divide = async (a, b) => {
    const res = a / b
    if (res === Infinity) {
        const err = new Error('divisor should not be zero')
        throw err
    }
    return res
}

function add(a, b) { return a + b }

// const divResPromise = divide(12, 3)
// divResPromise
//     .then((data) => { console.log(data) })
//     .catch((err) => { console.log(err) })
//     .finally(() => { console.log('something else') })

async function callDivide() {
    try {
        const data = await divide(12, 3)
        console.log(data);
    } catch (err) {
        console.log(err)
    } finally {
        console.log('something else')
    }
}
callDivide()


const addRes = add(12, 3)
console.log(addRes);
console.log('end of code...');