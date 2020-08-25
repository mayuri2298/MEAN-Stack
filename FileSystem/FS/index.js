const FS = require("fs");

let readDemo = () => {
    const filePath = "E:/MAYURI CHAVAN/Visual Studio/AWP/one.txt";
    FS.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        console.log(data);
    });
};
//readDemo();

let readDemo1 = () => {
    try {
        const filePath = "E:\\MAYURI CHAVAN\\Visual Studio\\AWP\\onee.txt";
        FS.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
            console.log(err);
            console.log(data);
        });
    } catch (error) {
        console.log(error, error.message);
    }
};
readDemo1();