const fs = require("fs");

let readDemo = () => {
    const filePath = "E:/MAYURI CHAVAN/Visual Studio/AWP/one.txt";
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        console.log("1", data);

        const filePath1 = "E:/MAYURI CHAVAN/Visual Studio/AWP/one.txt";
        fs.readFile(filePath1, { encoding: "utf-8" }, (err, data) => {
            console.log("2", data);
        })

    });
};
readDemo();