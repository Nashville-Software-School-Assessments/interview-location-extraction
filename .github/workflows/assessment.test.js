const { extractLocations, treasures, books } = require("../../src/main.js")



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
