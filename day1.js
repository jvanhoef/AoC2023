import { readFile } from 'fs';

let count = 0;

readFile('input_data/day1_1.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    let lines = data.split('\n');
    lines.forEach(handleClean);

    console.log(count);
});

function handleClean(line) {
    const numbers = line.match(/\d/g);
    if(!numbers) {
        return count
    }
    const cleanNumberStr = numbers[0] + numbers.slice(-1);
    const cleanNumber = parseInt(cleanNumberStr);
    count = count + cleanNumber;
};