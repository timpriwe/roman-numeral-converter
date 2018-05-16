
const toRoman = () => {

    // input of the number on the page, Math.floor because of crashing with floats
    let input = Math.floor(document.getElementById('input').value)

    // empty string to get filled while iterating through the number
    let output = ''
    
    // Arrays with all numbers which have a roman symbol and the special cases where we have substraction instead of addition (IX, XL, XC, CD, CM) 
    let numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    let romanNumbers = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']

    // At 4000 we get an overline over the letters, so we cheat and say its okay to you more than 3 Ms in a row
    while (input >= 4000) {
        output += 'M'
        input -= 1000
    }

    // Iterating through every item in our numbers array
    for (let index = numbers.length - 1; input > 0; index--) {
        
        // when our input is bigger/equal than the actual index, we add the character of the index to our output array and substract its number from our input
        while (input >= numbers[index]) {
            output += romanNumbers[index]
            input -= numbers[index]
        }   
    }
    
    //display our result in html
    document.getElementById('output').value = output
}

// eventListener for our button, prevents reloading the page and calls our method for converting our number
document.getElementById('button').addEventListener('click', function(event){
    event.preventDefault()
    toRoman()
})
