import { readFile } from 'fs';

let indexSum = 0;
let powerSum = 0;
let lineCount = 0;
const givenCubes = {
    "red": 12, 
    "green": 13,
    "blue": 14,
};

readFile('input_data/day2_1.txt', 'utf-8', function(err, data) {
    if (err) throw err;

    let cleanedData = data.replace(/,|;/g, '');
    let lines = cleanedData.split('\n');
    //handlePart2(lines[0]);
    lines.forEach(handlePart1);
    lines.forEach(handlePart2);

    console.log("part 1: ", indexSum, "part 2: ", powerSum);
});

function handlePart1 (line) {
    lineCount++
    let words = line.split(' ');
    //console.log(words);
    for (let i = 2; i < words.length; i += 2) {

        //console.log(lineCount, words[i], words[i+1]);
        if(words[i] > givenCubes[words[i+1]]) {
            //console.log("break");
            return indexSum;
        }
    }
    indexSum += parseInt(words[1]);
    //console.log( "correct: ", parseInt(words[1]), "line: ", lineCount);
};

function handlePart2 (line) {
    lineCount++
    let words = line.split(' ');
    let currentMax = {
        "red": 0, 
        "green": 0,
        "blue": 0,    
    }
    for (let i = 2; i < words.length; i += 2) {
        //console.log(currentMax, words[i+1], words[i]);
        if(words[i] > currentMax[words[i+1]]) {
            currentMax[words[i+1]] = parseInt(words[i]);
        }
    }
    let power = currentMax["red"] * currentMax["green"] * currentMax['blue'];
    powerSum += power;
    //console.log(lineCount, currentMax, words);
};
