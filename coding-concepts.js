// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
// console.log(cohort.split(""))

// a) Your answer: The variable cohort that is storing the string "Bravo 2023" will be console logged as an array of invidual strings. Each string will be one letter from the original variable. 
// b) Verify and explain: The code ran the variable and spilt the string inside into an array of all seperate string letters. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 //console.log(greeter("LEARN Student"))

// a) Your answer: The funciton greeter will give undefined because there isnt a return for the funciton to console.log. 
// b) Verify and explain: The funcition gave an undefined when ran because the string interpelation on line 19 needs to be a return statement so that data can be displayed in the line 23 console.log

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
 ///console.log(multipliedByTwo)

// a) Your answer: The Higher order function multipliedByTwo has an array of numbers stored inside. This array has the .map method attached and a value of number that will be multiplied by 2. Since the .map method iterates through an entire array the return will be an array that has each index value multiplied by 2 based on the original stored array. 
// b) Verify and explain: The code when ran used the .map method attached to the array to return a new array with index values * 2. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 //console.log(onlyOdds)

// a) Your answer: This Higher order funciton has an array inside. The array has a method attached called .filter. This method will look through each index in that array to determine if the conditional statement is true and provide those values back. Since the conditional is a number that is not equally divisible by 2 the numbers that will return are 11, 13, and 15.
// b) Verify and explain: The .filter method returned an array with the odd numbers from the original array. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 //console.log(myCodingSkills.languages[0])

// a) Your answer: The object myCodingSkills has 4 different elements in it. The languague element has an array of two strings. When console.logged the myCodingSkills oject has the key language with square brackets and a 0 indicating the data at the 0 index location. This value will be the string "JavaScript"
// b) Verify and explain: The console.log gave the string JavaScript which is the 0 index of the array for the element languages. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 //console.log(learnStudent)

// a) Your answer: The Class Learn has elements inside for student, cohort, and year. The constructor has a parameter called name. This is also given to the student elment to make the code dynamic. On line 64 the Class is given a new argument, a string for the name. When console.logged 'George' will be passed into the class and display the name as 'George', the cohort as the string 'Bravo', and the year as the number 2023. 
// b) Verify and explain: The code returned Learn { student: 'George', cohort: 'Bravo', year: 2023 }. The class, because dynamic, always the user to create a new element like in line 64. 