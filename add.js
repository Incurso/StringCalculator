function Add (numbers) {
  // Check if string is empty
  if (numbers === '') {
    return 0
  }
  let negNums = []

  // Split the string on commas and parse the values to int
  let nums = numbers.split(/[,\n]/).map(n => {
    let num = parseInt(n)

    if (num < 0) {
      negNums.push(num)
    }

    return num
  })

  if (negNums.length > 0) {
    throw new Error(`Negatives not allowed: ${negNums.join(',')}`)
  }

  // Sum the numbers in the array
  return nums.reduce((a, b) => a + b)
}

module.exports = Add
