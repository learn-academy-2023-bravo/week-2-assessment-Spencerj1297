// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// Psuedo:
// Create a new test using the descrive keyword
// designate the name of our tested function inside the '' within the test.
// Make sure to remember parenthesis for the call back function.
// Use the 'it' keyword to describe inside of a string what the function will do.
// Create 3 different expect statements for the outcomes of the objects below.

describe("divBYThree", () => {
    it("function will return string interpelation the number is divisible by three, or the number is not divisible by three.", () => {
      expect(divBYThree({ number: 15 })).toBe('15 is divisible by three.')
      expect(divBYThree({ number: 0 })).toBe('0 is divisible by three.')
      expect(divBYThree({ number: -7 })).toBe('-7 is not divisible by three.')
    })
  })

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// psuedo:
// Create a the funciton divByThree that we established in the test.
// Give the funciton the parameter object for clarity.
// Use the arrow funciton syntex.
// Create a condtional using an if statement to test if the obeject is divisible by three, which will be set to strictly equal to 0.
// Create an else statement as a catch all for all other numbers that do not meet the criteria above.
// Set both the if and else statements to return a string interpolated message ' object.number is divisible by three, or object.numer is not divisible by three.
// DO NOT include a console.log because it is being tested!!!

const divBYThree = (object) => {
    if(object.number % 3 === 0){
      return `${object.number} is divisible by three.`
    }else{
        return `${object.number} is not divisible by three.`
    }
  }

//Output:
//   PASS  ./code-challenges.test.js
//   PASS  ./jest.test.js

//  Test Suites: 2 passed, 2 total
//  Tests:       2 passed, 2 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Psuedo:
// Take the test from question one as a template.
// Change the name of the function to allCap.
// Change 'it' to what the function will do.
// Create two expect statements for both of the arrays given to be arugments in the function.

describe("allCap", () => {
  it("function will take in the given arrays as arguments and return new arrays with the strings in all capital", () => {
    expect(allCap(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"])
    expect(allCap(["temperature", "database", "chopsticks", "mango"])).toEqual(["TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO"])
  })
})

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
// // b) Create the function that makes the test pass.

// // Psuedo:
// // Create a function named allCap that was named in the test.
// // Give the function a parameters called array to match the data type.
// // Add the arrow syntex for the funciton.
// // Use method .map() to iterate through each array
// // .map() will create a new array. Add the .toUpperCase method to change the strings stored in each array to all upper case letters.
//The return will have the toUpperCase method to avoid using another  line of code.
// 

const allCap = (array) => {
return array.map((value) => {
  return value.toUpperCase()
})
}

// Output:
//  PASS  ./jest.test.js
//  PASS  ./code-challenges.test.js

//  Test Suites: 2 passed, 2 total
//  Tests:       2 passed, 2 total

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

//Psuedo:
// Take the test from question one as a template.
// Change the name of the function to vowelIndex
// Change 'it' to what we want our function to do.
// Create three expect statements for the strings to be used as arugments in the function.

describe("vowelIndex", () => {
  it("Function will take in the strings learn, academy, challenges and return the index location of the first vowel in each string", () => {
    expect(vowelIndex("learn")).toEqual(1)
    expect(vowelIndex("academy")).toEqual(0)
    expect(vowelIndex("challenges")).toEqual(2)
  })
})

 const vowelTester1 = "learn"
 Expected output:
 Expected output: 0
const vowelTester2 = "academy"
 const vowelTester3 = "challenges"
Expected output: 2

// b) Create the function that makes the test pass.
// Psuedo:
// Create the function vowelIndex
// Give the function the parameter string because of the data type being used
// Create a new variable for the function called vowels that will be equal to an array of strings that contain each vowel.
// Create a loop with i starting at 0 to be the index value.
// Make i < strings.length so the loop will continue until each end of lonegst string in test.
// increment the loop by +1.
// inside the loop make an if statement that takes the variable vowels add .includes. This will check for the value we place inside of the methods parentheses.
// inside put the parameter string with sqaure brackets and i.
//This will check the index of the string for the vowels and return i so the value can be read in the test.

const vowelIndex = (string) => {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for(i = 0; i < string.length; i++){
      if(vowels.includes(string[i]))
      return i
  }}

//   Output:
//   PASS  ./jest.test.js
//   PASS  ./code-challenges.test.js

//  Test Suites: 2 passed, 2 total
//  Tests:       2 passed, 2 total
