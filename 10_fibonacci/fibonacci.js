const fibonacci = function(index) {
    if (index < 0) {
        return 'OOPS';
    } else {
        const fib = [1, 1];
        for (let i = 0; i +1 < index; i++) {
            fib.push(fib[i] + fib[i+1]);
        };
        return fib[index -1];
    };
};

// Do not edit below this line
module.exports = fibonacci;
