import { readFile } from 'fs';

let part1 = 0;
let part2 = 0;
let lineCount = 0;

/**
 * Load data, remove commas and semicolons and split per line
 */
readFile('input_data/day3_1.txt', 'utf-8', function(err, data) {
    // Check for error in data
    if (err) throw err;
    //remove unwanted characters and split per line
    let lines = data.split('\n');

    // Compute solution for part 1 and 2
    for ( let i = 1; i<lines.length-1; i++){
        handlePart1(lines[i], lines[i-1], lines[i+1]);
    }
    lines.forEach(handlePart2);

    console.log("part 1: ", part1, "part 2: ", part2);
});

function handlePart1 (line, previousLine, nextLine) {
    let characters = line.split('');
    let previousCharacters = previousLine.split('');
    let nextCharacters = nextLine.split('');
    for( let i = 1; i < characters.length-1; i++) {
        if(typeof characters[i] === "number"){
            if(typeof characters[i-1] === "number" && characters[i-1])
        }
    }
    console.log(characters, previousCharacters, nextCharacters);
};


function handlePart2 (line) {
    return(part2);
};
