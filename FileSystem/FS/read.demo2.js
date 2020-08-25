const fs = require("fs");
const promise = require("bluebird");

promise.promisifyAll(fs);

let readDemo = () => {
    const filePath = "E:/MAYURI CHAVAN/Visual Studio/AWP/onee.txt";
    const mpromise = fs.readFileAsync(filePath, { encoding: "utf-8" });
    console.log(mpromise);

    mpromise.then((data) => {
        console.log(data);
    })

    mpromise.catch((err) => {
        console.log(err);
    });
};
readDemo();