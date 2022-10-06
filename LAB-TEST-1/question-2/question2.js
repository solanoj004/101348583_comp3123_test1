const resolvedPromise = (delay) => {
    // Creates a promise 
    var p1 = new Promise((resolve, reject) => {
        // Prints a message if the promise resolves correctly after 500ms
        setTimeout(() => {
            resolve({'message':'delayed success!'})}, delay)
    })
    return p1
}

const rejectedPromise = (delay) => {
    // Creates a promise
    var p2 = new Promise((resolve, reject) => {
        // Prints a message if the promise gets rejected after 500ms
        setTimeout(() => {
            reject({'error': 'delayed exception!'})}, delay)
    })
    return p2
}

// "then" is used for promises that resolves
resolvedPromise(500).then(res => console.log(res))
// "catch" is used for promises that is rejected
rejectedPromise(500).catch(err => console.log(err))