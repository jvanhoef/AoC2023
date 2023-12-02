import { readFile } from 'fs';

let count = 0;
let lineCount = 0;
const givenCubes = {
    "red,": 12, 
    "green,": 13,
    "blue,": 14,
    "red": 12, 
    "green": 13,
    "blue": 14,
    "red;": 12, 
    "green;": 13,
    "blue;": 14
};

readFile('input_data/day2_1.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    let lines = data.split('\n');
    lines.forEach(handleLine);

    console.log(count);
});

function handleLine (line) {
    let words = line.split(' ');
    lineCount++
    for (let i = 2; i < words.length; i += 2) {
        console.log(lineCount, words[i], words[i+1]);
        if(words[i] > givenCubes[words[i+1]]) {
            console.log("break");
            return count;
        }
    }
    count += parseInt(words[1]);
    //console.log( "correct: ", parseInt(words[1]), "line: ", lineCount);

    //console.log(words);
};
