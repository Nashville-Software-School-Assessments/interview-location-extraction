/*
    Learning objectives assessed in this exercise:
        1. Functions, arguments, parameters, return values
        2. Array iteration
        3. Accessing object properties
        4. Using array methods
        5. Algorithmic thinking

  INSTRUCTIONS:
    1. Write a function assigned to a variable named `extractLocations`.
    2. The function should accept any array of objects as input. Two
        arrays are provided for your use.
    3. The function should return an array of strings.
    4. The strings in the array should be extracted from the location
        property of each object in the input array.

            Example return value of extractLocations function:
            [ "Australia", "Egypt", "Norway", "Thailand" ]

    5. Write a function assigned to a variable named `displayLocations`
    6. The displayLocations function should accept an array of strings
        as input.
    7. The displayLocations function should return a single string. Each
        string in the original array should be wrapped in a "<div>" element.

            Example return value of displayLocations function:
            "<div>Australia</div><div>Egypt</div><div>Norway</div><div>Thailand</div>"

    TESTING YOUR CODE:
    1. See the `testMyAlgorithmicThinking` function below.
    2. Replace the underscores on both lines of code in the function
        body with the proper instructions to take the results of the
        extractLocations function and provide it as input to the
        displayLocations function.
*/

const treasures = [
    { id: 1, prize: "Bronze coin", location: "Australia" },
    { id: 2, prize: "Sapphire pendant", location: "Egypt" },
    { id: 3, prize: "Platinum comb", location: "Norway" },
    { id: 4, prize: "Jade elephant", location: "Thailand" }
]

const books = [
    { id: 1, prize: "A Brief History of Time", location: "United States" },
    { id: 2, prize: "Anna Karenina", location: "Russia" },
    { id: 3, prize: "Travelling with Djinns", location: "Sudan" },
    { id: 4, prize: "Ferdydurke", location: "Poland" }
]


/*
    WRITE YOUR TWO FUNCTIONS HERE
*/






/*
    NOTE: An array of objects (chosen from above) will be the input
    to this function. Do not modify the function definition.
*/
const testMyAlgorithmicThinking = (data) => {


    // TASK: Replace the underlines below with the correct code
    const extractionResults = ________
    const displayResults = ________










    // **********  Do not touch this code  **********
    return {extractionResults, displayResults}
    // **********  Do not touch this code  **********
}




// **********  Do not touch this code  **********
const {extractionResults, displayResults} = testMyAlgorithmicThinking(books)
console.log(extractionResults)
console.log(displayResults)
// **********  Do not touch this code  **********





























































// **********  Do not touch this code  **********
export default { extractLocations, treasures, books, displayLocations, testMyAlgorithmicThinking }
// **********  Do not touch this code  **********