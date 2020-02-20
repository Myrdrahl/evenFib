function calculateSequence () {
  let sumOfEvens = 0
  let a = 1
  let b = 1
  let c = 0

  while (c < 4000000) {
    c = a + b
    if (c % 2 === 0) {
      sumOfEvens += c
    }
    a = b
    b = c
  }
  return sumOfEvens
}

let sum = calculateSequence()
console.log('Dette er summen: ' + sum)
