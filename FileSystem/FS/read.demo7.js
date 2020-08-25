const fs = require("fs");
const promise = require("bluebird");
promise.promisifyAll(fs);

let readDemo = async() => {
    const filePath1 = "E:/MAYURI CHAVAN/Visual Studio/AWP/one.txt";
    const data1 = await fs.readFileAsync(filePath1, { encoding: "utf-8" });
    console.log(data1);

    const filePath2 = "E:/MAYURI CHAVAN/Visual Studio/AWP/two.txt";
    const data2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
    console.log(data2);

    const filePath3 = "E:/MAYURI CHAVAN/Visual Studio/AWP/three.txt";
    const data3 = await fs.readFileAsync(filePath3, { encoding: "utf-8" });
    console.log(data3);


}
readDemo();