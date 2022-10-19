const reverseString = function(string) {
    let stringLength = string.length;
    let newString = '';
    
    for (index = stringLength -1; index > -1; index--) {
        newString += string[index];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
