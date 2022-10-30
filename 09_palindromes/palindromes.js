const palindromes = function (string) {
    let inputString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ' ' ||
            string[i] == ',' ||
            string[i] == '.' ||
            string[i] == '!') {
            continue;
        } else {
            inputString += string[i];
        };
    };

    let outputString = '';
    for (let i = inputString.length -1; i >= 0; i--) {
        outputString += inputString[i];
    };
    return outputString.toLocaleLowerCase() === inputString.toLocaleLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
