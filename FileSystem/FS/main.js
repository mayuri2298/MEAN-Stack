const fs = require("fs");

let readDemo = () => {
    try {
        const filePath = "E:/MAYURI CHAVAN/Visual Studio/AWP/one.txt"
        const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
        console.log(fileContent);
    } catch (error) {
        console.log("There is some error", error.message);
    }

};
//readDemo();

let readDemoWithoutException = () => {

    const filePath = "E:/MAYURI CHAVAN/Visual Studio/AWP/onee.txt"
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    console.log(fileContent);

};
readDemoWithoutException();