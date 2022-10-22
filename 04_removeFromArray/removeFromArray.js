const removeFromArray = function(array, ...rem) {
	let newArray = [];

	for (const arrayItem of array) {
		let isInRem = false;
		
		for (const remItem of rem) {
			if (arrayItem === remItem) {
				isInRem = true;
				break;
			} else {
				continue;
			};
		};

		if (isInRem) {
			continue;
		} else {
			newArray.push(arrayItem);
		};
	};

	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
