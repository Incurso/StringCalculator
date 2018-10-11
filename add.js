function Add (numbers) {
  // Check if string is empty
  if (numbers === '') {
    return 0
  }

  // Check if string contains one number
  if (numbers.indexOf(',') < 0) {
    return parseInt(numbers)
  } else {
    // Split the string on commas and parse the value to int
    let nums = numbers.split(',').map(n => parseInt(n))

    if (nums.length > 1) {
      /*
      let total = 0

      for (let i = 0; i < nums.length; i++) {
        total += nums[i]
      }

      return total
      */
      return nums.reduce((a, b) => a + b)
    }
  }
}

module.exports = Add
