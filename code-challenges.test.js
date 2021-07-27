// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//Start the test with describe() and the function name
describe("fibonacci", () => {
//Use it() to describe what the purpose of the function is
  it("takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci", () => {
//write out the tested inputs with expected results
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
 })

// b) Create the function that makes the test pass.

const fibonacci = (num) => {
  //declare a fibonacci array with the first two numbers as 1 since they stay constant
  let fibArray = [1,1]
  //Create a for loop that iterates from 2 to whatever length you passed in the parameter (-1 since index starts at 0)
  for (i = 2; i <= num -1 ; i++) {
  // update the array at iterated index to the previous num + the one before that
  fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
  }
  //return the whole array
  return fibArray
}

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//declare a test by describe(functionName)
describe("oddNumsSorted", () => {
//add our test variables
  let fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  let fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
//it("string") syntax to describe the purpose of the function
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
//write out our expected.toEqual statements which will test the function
    expect(oddNumsSorted(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddNumsSorted(fullArr2)).toEqual([-823, 7, 23])
  })
 })

// b) Create the function that makes the test pass.

const oddNumsSorted = (arr) => {
  //use the .filter built in method to filter through the inputed array and only pass through the values which are numbers and are odd (modulo)
  //use the .sort built in method to order them from least to greatest
    return arr.filter(value =>
      value % 2 != 0 && typeof value === "number").sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

// var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

// var numbersToAdd3 = []
// Expected output: []


//Use describe(functionName) to start test syntax
describe("accumulatingSum", () => {
//declare test variables
  let numbersToAdd1 = [2, 4, 45, 9]
  let numbersToAdd2 = [0, 7, -8, 12]
  let numbersToAdd3 = []
//write the intended purpose of the function
  it("takes in an array and returns an array of the accumulating sum", () => {
//write out our expected.toEqual statements which will test the function
    expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(accumulatingSum(numbersToAdd3)).toEqual([])
  })
 })


// b) Create the function that makes the test pass.

const accumulatingSum = (arr) => {
  // Need a variable for the new array which will be modified
  let arr2 = arr
  //iterate with a for loop
  for (let i=1;i<arr.length;i++){
  //new array value has to equal the previous sum plus the new value
    arr2[i] = arr2[i-1] + arr[i]
  }
  return arr2
}
