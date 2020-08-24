const module1 = require("./module1");

const sum = function(n1, n2) {
    return n1 + n2;
};

const diff = function(n1, n2) {
    return n1 - n2;
};

const mul = function(n1, n2) {
    return n1 * n2;
};

const div = function(n1, n2) {
    return n1 / n2;
};

module.exports = {
    sum,
    diff,
    mul,
    div
};