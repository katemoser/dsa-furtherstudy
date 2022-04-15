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
    if (square === 1 || square === 0) {
        return square;
    }

    if(Array.isArray(square)){
        let simplifiedSquare = []
        for(let smallerSquare of square){
            simplifiedSquare.push(simplify(smallerSquare));
        }

        if(simplifiedSquare.includes(0) && !simplifiedSquare.includes(1)){
            simplifiedSquare = 0
        }
        else if(simplifiedSquare.includes(1) && !simplifiedSquare.includes(0)){
            simplifiedSquare = 1
        }
        return simplifiedSquare
    }
}

function add(s1, s2){
    if(typeof(s1) === "number" && typeof (s2) === "number"){
        if(s1 ===1 || s2 === 1){
            return 1;
        }
        return 0;
    }
}


module.exports = { dump, validate, simplify, add };