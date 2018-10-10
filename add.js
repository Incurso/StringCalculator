function Add (numbers) {
    // Check if string is empty
    if (numbers === '') {
        return 0
    }

    // Check if string contains one number
    if (numbers.indexOf(',') < 0) {
        return parseInt(numbers)
    } else {
        nums = numbers.split(',')
        
        if (nums.length === 2) {
            return parseInt(nums[0]) + parseInt(nums[1])
        }
    }
}

module.exports = Add
