import { readFile } from 'fs';

let indexSum = 0;
let powerSum = 0;
let lineCount = 0;

/**
 * Load data, remove commas and semicolons and split per line
 */
readFile('input_data/day2_1.txt', 'utf-8', function(err, data) {
    // Check for error in data
    if (err) throw err;
    //remove unwanted characters and split per line
    let cleanedData = data.replace(/,|;/g, '');
    let lines = cleanedData.split('\n');

    // Compute solution for part 1 and 2
    lines.forEach(handlePart1);
    lines.forEach(handlePart2);

    console.log("part 1: ", indexSum, "part 2: ", powerSum);
});

const givenCubes = {
    "red": 12, 
    "green": 13,
    "blue": 14,
};

/**
 *  Check if game is possible with the amount of given cubes
 * @param {*} line Cleaned up line
 * @returns @param indexSum the new sum of all correct games
 */
function handlePart1 (line) {
    lineCount++
    let words = line.split(' ');
    // Check if there are any cubes in the game that are higher then the ones in the bag
    for (let i = 2; i < words.length; i += 2) {
        if(words[i] > givenCubes[words[i+1]]) {
            return indexSum;
        }
    }
    return indexSum += parseInt(words[1]);
};

/**
 * Checks whats the minimum amount of cubes needed in a game
 * @param {*} line Cleaned up line
 * @returns @param powerSum The new sum of all powers of a game
 */
function handlePart2 (line) {
    lineCount++
    let words = line.split(' ');
    let currentMax = {
        "red": 0, 
        "green": 0,
        "blue": 0,    
    }
    // Check for every cube if it amount is higher then the previous amount used
    for (let i = 2; i < words.length; i += 2) {
        if(words[i] > currentMax[words[i+1]]) {
            currentMax[words[i+1]] = parseInt(words[i]);
        }
    }
    // Compute the power and return it
    let power = currentMax["red"] * currentMax["green"] * currentMax['blue'];
    powerSum += power;
    return powerSum;
};
