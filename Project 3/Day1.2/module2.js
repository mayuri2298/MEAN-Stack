const module1 = require("./module1");

const num = 22;
const str = "mayuri";
const bool = true;
const arr = [1, 2, 3, 4, 5];
const str_arr = ["mayuri", "abhi", "omkar", "sujit", "shubham", "dhanashree"];
const myjson = { id: 1, title: "A" };
const list = [
    { id: 1, name: "mayuri" },
    { id: 2, name: "sujit" },
    { id: 3, name: "omkar" }
];

module1.exports = {
    num,
    str,
    bool,
    arr,
    str_arr,
    myjson,
    list
};