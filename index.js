function calculateSequence () {
  let sumOfEvens = 0
  let a = 1
  let b = 1
  let c = 0

  while (c < 4000000) {
    c = a + b
    if (c % 2 === 0) {
      sumOfEvens += c
      console.log('Verdien av C: ' + c)
    }
    a = b
    b = c
    console.log('A er: ' + a + ' og B er: ' + b)
  }
  return sumOfEvens
}

let sum = calculateSequence()
console.log('Dette er summen: ' + sum)
