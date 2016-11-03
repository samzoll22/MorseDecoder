var morseIndex = {
    "-----": 0,
    ".----": 1,
    "..---": 2,
    "...--": 3,
    "....-": 4,
    ".....": 5,
    "-....": 6,
    "--...": 7,
    "---..": 8,
    "----.": 9
};

var numberIndex = {
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----."
};

function spaceGetter (string) {   //--> handling for morse if contains spaces
    var newStr = string.split('');
    for(var i = 0; i < string.length; i++){
        var getter = newStr[i].indexOf(" ");
        if (getter === 0){
            delete newStr[i];
        }
    }
    return newStr.join('');
}

function morseDecoder (numStr) {
    var decoded = [];
    if (typeof numStr === 'number'){    //--> number decoder
        var numPusher = numStr.toString().split('');
        for (var i = 0; i < numPusher.length; i++){
            for (var j in numberIndex){
                if (numPusher[i] === j)
                    decoded.push(numberIndex[j]);
            }
        }
    } else if (typeof numStr === 'string' && numStr !== 'number'){  //--> morse decoder
        var morseArr = [];
        var choppedArr = spaceGetter(numStr).split('');
        for (var k = 0; k < choppedArr.length; k+=5){
            var strPusher = choppedArr.slice(k,k+5).join(''); //--> convert each number to array format for indexing
            morseArr.push(strPusher);
        }
        for (var l = 0; l < morseArr.length; l++){
            for (var m in morseIndex){
                if (morseArr[l] === m){
                    decoded.push(morseIndex[m]);
                }
            }
        }
    }
    if (typeof decoded[0] === 'number'){ // --> display correction for numbers
        return numStr + " in morse code means " + decoded.join('') + " in standard numbers.";
    } else if (typeof decoded[0] === 'string'){  // --> display correction for morse
        return numStr + " means " + decoded.join(' ') + " in morse code.";
    }
}

//143 should be ".---- ....- ...--"
morseDecoder(".---- ....- ...--");

morseDecoder(143);
    
