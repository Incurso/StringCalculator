function Add (numbers) {
    // Check if string is empty
    if (numbers === '') {
        return 0
    }

    // Check if string contains one number
    console.log(numbers.indexOf(','))
    if(numbers.indexOf(',') < 0) {
        return parseInt(numbers)
    }
}

module.exports = Add
