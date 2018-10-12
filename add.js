function Add (numbers) {
  let re = /[,\n]/
  let negNums = []

  // Check if string is empty
  if (numbers === '') {
    return 0
  }

  // Check for custom delim
  if (numbers.substr(0, 2) === '//') {
    re = numbers.substr(2, numbers.indexOf('\n') - 2)
    numbers = numbers.substr(numbers.indexOf('\n') + 1)
  }

  // Split the string on commas and parse the values to int
  let nums = numbers.split(re).map(n => {
    let num = parseInt(n)

    // Check if the number is negative
    if (num < 0) {
      negNums.push(num)
    }

    // Return the number as is if it is 1000 or lower otherwise return 0
    return num <= 1000 ? num : 0
  })

  // If we have negative numbers throw an error
  if (negNums.length > 0) {
    throw new Error(`Negatives not allowed: ${negNums.join(',')}`)
  }

  // Sum the numbers in the array
  return nums.reduce((a, b) => a + b)
}

module.exports = Add
