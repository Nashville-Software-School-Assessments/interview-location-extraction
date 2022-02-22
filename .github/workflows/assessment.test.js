const {
    extractLocations,
    treasures,
    books,
    displayLocations,
    testMyAlgorithmicThinking
} = require("../../src/index.js")


describe("Location extraction", () => {

    test('Function is defined', () => {
        expect(extractLocations).toBeDefined();
    });

    test('Function returns something', () => {
        expect(extractLocations(treasures)).toBeDefined();
    });

    test('Function extracts treasure locations', () => {
        expect(extractLocations(treasures)).toMatchObject([ "Australia", "Egypt", "Norway", "Thailand" ]);
    });

    test('Function extracts book locations', () => {
        expect(extractLocations(books)).toMatchObject([ "United States", "Russia", "Sudan", "Poland" ]);
    });
})


describe("Location <div> generation", () => {
    let bookLocations, treasureLocations

    beforeAll(() => {
        treasureLocations = extractLocations(treasures)
        bookLocations = extractLocations(books)
    })

    test('Function is defined', () => {
        expect(displayLocations).toBeDefined();
    });

    test('Function returns something', () => {
        expect(displayLocations(treasureLocations)).toBeDefined();
    });

    test('Function builds treasure divs', () => {
        expect(displayLocations(treasureLocations))
            .toEqual("<div>Australia</div><div>Egypt</div><div>Norway</div><div>Thailand</div>");
    });

    test('Function builds book divs', () => {
        expect(displayLocations(bookLocations))
            .toEqual("<div>United States</div><div>Russia</div><div>Sudan</div><div>Poland</div>");
    });

})

describe("Data flow", () => {
    test('Correct order of operations', () => {
        const {extractionResults, displayResults} = testMyAlgorithmicThinking(treasures)
        expect(extractionResults).toMatchObject([ "Australia", "Egypt", "Norway", "Thailand" ]);
        expect(displayResults).toEqual("<div>Australia</div><div>Egypt</div><div>Norway</div><div>Thailand</div>");
    });
})

