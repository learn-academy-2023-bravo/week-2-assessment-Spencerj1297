// describe("divBYThree", () => {
//     it("function will return string interpelation the number is divisible by three, or the number is not divisible by three.", () => {
//       expect(divBYThree({ number: 15 })).toBe('15 is divisible by three.')
//       expect(divBYThree({ number: 0 })).toBe('0 is divisible by three.')
//       expect(divBYThree({ number: -7 })).toBe('-7 is not divisible by three.')
//     })
//   })
  
//   const object1 = { number: 15 }
//   // Expected output: "15 is divisible by three"
//   const object2 = { number: 0 }
//   // Expected output: "0 is divisible by three"
//   const object3 = { number: -7 }
//   // Expected output: "-7 is not divisible by three"
  
//   // b) Create the function that makes the test pass.
  
//   const divBYThree = (object) => {
//     if(object.number % 3 === 0){
//       return `${object.number} is divisible by three.`
//     }else{
//         return `${object.number} is not divisible by three.`
//     }
//   }

// describe("allCap", () => {
//   it("function will take in the given arrays as arguments and return new arrays with the strings in all capital", () => {
//     expect(allCap(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"])
//     expect(allCap(["temperature", "database", "chopsticks", "mango"])).toEqual(["TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO"])
//   })
// })

// // // const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// // // const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // // // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// // // b) Create the function that makes the test pass.
// // // Psuedo:
// // // Create a function named allCap that was named in the test.
// // // Give the function two parameters called arr1 and arr2 to match the data.
// // // Add the arrow syntex for the funciton.
// // // Use method .map() to iterate through each array 
// // // .map() will give us a new array to which we can add the .toUpperCase method to change the strings stored in each array to all upper case letters. 


// const allCap = (array) => {
// return array.map((value) => {
//   return value.toUpperCase()
// })
// }

describe("vowelIndex", () => {
    it("Function will take in the strings learn, academy, challenges and return the index location of the first vowel in each string", () => {
      expect(vowelIndex("learn")).toEqual(1)
      expect(vowelIndex("academy")).toEqual(0)
      expect(vowelIndex("challenges")).toEqual(2)
    })
  })
  
  // // const vowelTester1 = "learn"
  // // // Expected output: 1
  // // const vowelTester2 = "academy"
  // // // Expected output: 0
  // // const vowelTester3 = "challenges"
  // // // Expected output: 2
  
  // // // b) Create the function that makes the test pass.
  // // Psuedo:
  // // Create the function vowelIndex
  // // Give the function the parameter string because of the data type being used
  // // 
  
  const vowelIndex = (string) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for(i = 0; i < string.length; i++){
        if(vowels.includes(string[i]))
        return i
    }}