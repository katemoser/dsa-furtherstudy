"use strict";

/** Takes in a square and prints all squares */
function dump(square) {
    if (typeof (square) === "number") {
        console.log(square);
        return;
    }

    if (Array.isArray(square)) {
        for (let smallerSquare of square) {
            dump(smallerSquare);
        }
    }
}

/** Validating square's structure */
function validate(square) {
// TODO: PROBABLY NEED TRUTH CHECKER ARRAY
    if (square === 1 || square === 0) {
        return true;
    }

    if (Array.isArray(square)){
        if (square.length !== 4) {
            return false;
        }
        if (square.length === 4) {
            for (let smallerSquare of square) {
                validate(smallerSquare);
            }
        }
    }

    return true;
}

/** Simplifies square to maximally simplified version of square */
function simplify(square) {
    
}


module.exports = { dump, validate };