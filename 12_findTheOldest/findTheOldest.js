const findTheOldest = function(array) {
    const today = new Date();
    const year = today.getFullYear();

    
    let calcAge = function (person) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = year;
        };
        return person.yearOfDeath - person.yearOfBirth;
    };
    
    let oldest = array[0];
    for (let item of array) {
        if (calcAge(item) > calcAge(oldest)) {
            oldest = item;
        };
    };

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
