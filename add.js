function Add (numbers) {
  // Check if string is empty
  if (numbers === '') {
    return 0
  }
  let negNums = []

  // Split the string on commas and parse the values to int
  let nums = numbers.split(/[,\n]/).map(n => {
    let num = parseInt(n)

    // Check if the number is negative
    if (num < 0) {
      negNums.push(num)
    }

    // Return the number as is if it is 1000 or lower otherwise return 0
    return num <= 1000 ? num : 0
  })

  if (negNums.length > 0) {
    throw new Error(`Negatives not allowed: ${negNums.join(',')}`)
  }

  // Sum the numbers in the array
  return nums.reduce((a, b) => a + b)
}

module.exports = Add
