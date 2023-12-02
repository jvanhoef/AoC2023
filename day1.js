import { readFile } from 'fs';

let count = 0;
let lines = 0;

readFile('input_data/day1_1.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    let lines = data.split('\n');
    lines.forEach(handleClean);

    console.log(count);
});

function convertWordToNumber(word) {
    const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // Check if word is in words
    if (words.includes(word)) {
        const index = words.indexOf(word);
        return numbers[index];
    } else {
        return word;
    }

}

function handleClean(line) {
    const regex = /one|two|three|four|five|six|seven|eight|nine|\d/g;
    let regexes = {
        "one": "o1e",
        "two": "t2o",
        "three": "thr3e",
        "four": "f4or",
        "five": "fi5ve",
        "six": "s6x",
        "seven": "s7ven",
        "eight": "ei8ght",
        "nine": "n9ne"
      };
      for (let word in regexes) {
        let regex = new RegExp(word, "g");
        line = line.replace(regex, regexes[word]);
      }
    const numbers = line.match(/\d/g);
    const cleanNumberStr = convertWordToNumber(numbers[0]) + convertWordToNumber(numbers[numbers.length - 1]);
    const cleanNumber = parseInt(cleanNumberStr);
    //console.log(cleanNumber, convertWordToNumber(numbers[0]), convertWordToNumber(numbers[numbers.length - 1]), count, lines);
    count = count + cleanNumber;
    lines++;
    //console.log(lines);
};