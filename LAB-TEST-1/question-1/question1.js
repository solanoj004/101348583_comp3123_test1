const lowerCaseWords = (mixedArray) => {

    // Create a promise
    var p1 = new Promise((resolve, reject) => {
    
    // Checks if array contains elements and checks if passed argument is an array
    if (mixedArray.length > 0 && Array.isArray(mixedArray)) {
        // filters the array - removes non-strings
        const filteredArray = mixedArray.filter((element) => typeof element == "string")

        let lowerCasedArray = []
        // pushes the strings to a new array and makes them lowercase
        filteredArray.forEach(element => {
                lowerCasedArray.push(element.toLowerCase())
        })
        resolve(lowerCasedArray)
    } 
    else {
        reject("Empty array or not an array")

    }
})
    return p1
}      

// test runs
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]
lowerCaseWords(mixedArray)
.then((value) => console.log(value)
)
.catch((error) =>
    console.log(error)
)

const testArray1 = []
lowerCaseWords(testArray1)
.then((value) =>
    console.log(value)
)
.catch((error) =>
    console.log(error)
)

const testArray2 = "This is an array. Trust me"
lowerCaseWords(testArray2)
.then((value) =>
    console.log(value)
)
.catch((error) =>
    console.log(error)
)