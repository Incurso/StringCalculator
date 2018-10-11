function Add (numbers) {
  // Check if string is empty
  if (numbers === '') {
    return 0
  }

  // Check if string contains one number
  if (numbers.search(/[,\n]/) < 0) {
    return parseInt(numbers)
  } else {
    // Split the string on commas and parse the value to int
    let nums = numbers.split(/[,\n]/).map(n => parseInt(n))

    if (nums.length > 1) {
      return nums.reduce((a, b) => a + b)
    }
  }
}

module.exports = Add
