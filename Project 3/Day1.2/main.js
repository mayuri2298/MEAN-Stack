const mod1 = require("./module1");
const mod2 = require("./module2");
const mod3 = require("./module3");
console.log(mod1);

const total = mod1.sum(10, 20);
console.log("Sum", total);

console.log(mod2);

console.log(mod3);
const division = mod3.div(50, 10);
console.log("Division= ", division);