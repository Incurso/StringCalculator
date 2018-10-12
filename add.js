function Add (numbers) {
  // Check if string is empty
  if (numbers === '') {
    return 0
  }

  // Split the string on commas and parse the values to int
  let nums = numbers.split(/[,\n]/).map(n => {
    let num = parseInt(n)

    if (num < 0) {
      throw new Error(`Negatives not allowed: ${num}`)
    }

    return num
  })

  // Check if string contains one number
  return nums.reduce((a, b) => a + b)
}

module.exports = Add
