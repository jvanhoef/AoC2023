import { readFile } from 'fs';

readFile('input_data/day1_1.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    let lines = data.split('\n');
    console.log(lines[10]);
});