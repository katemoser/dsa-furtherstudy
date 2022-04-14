const {validate} = require("./split-squares")

const square1 = [0, 0, 1, 0];
const square2 = [1, 1, [0, 1, 0, 0], 0];
const square3 = 0;
const square4 = 1;

const badSquare1 = 3;
const badSquare2 = [1, 0, 1];
const badSquare3 = [1, 1, [0, 0, 0], 1];

const complexSquare1 = [1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1];
const complexSquare2 = [1, 1, 1, [1, 1, 1, 1]];
const complexSquare3 = [[1, 1, 1, 1], [1, 1, 1, 1], 1, 1];

console.log(validate(badSquare3))