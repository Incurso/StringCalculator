function Add (numbers) {
  // Check if string is empty
  if (numbers === '') {
    return 0
  }

  // Check if string contains one number
  if (numbers.search(/[,\n]/) < 0) {
    let num = parseInt(numbers)

    if (num < 0) {
      throw new Error(`Negatives not allowed: ${num}`)
    }

    return num
  } else {
    // Split the string on commas and parse the value to int
    let nums = numbers.split(/[,\n]/).map(n => {
      let num = parseInt(n)

      if (num < 0) {
        throw new Error(`Negatives not allowed: ${num}`)
      }

      return num
    })

    if (nums.length > 1) {
      return nums.reduce((a, b) => a + b)
    }
  }
}

module.exports = Add
