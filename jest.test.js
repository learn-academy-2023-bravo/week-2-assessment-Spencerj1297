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
  
  const divBYThree = (object) => {
    if(object.number % 3 === 0){
      return `${object.number} is divisible by three.`
    }else{
        return `${object.number} is not divisible by three.`
    }
  }