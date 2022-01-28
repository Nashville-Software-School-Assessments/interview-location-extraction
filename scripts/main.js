/*
    Learning objectives assessed in this exercise:
        1. Functions, arguments, parameters, return values
        2. Array iteration
        3. Accessing object properties
        4. Using array methods
        5. Algorithmic thinking
        
  Write a function that returns an array of strings. The strings in
  the array should be extracted from the location property of 
  each object in the array provided.
  
  Example return value of function:
    [ "Australia", "Egypt", "Norway", "Thailand" ]
  
  Below are two arrays that can be used. Your function should be 
  able to work for either array, but not both at the same time.
  Either can be sent as input to the function.
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

