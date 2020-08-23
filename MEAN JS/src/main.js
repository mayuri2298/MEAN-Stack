let Person = require('./person3');

class Main {
    static main() {
        console.log("This is demo");
        let p = new Person();
        const name = p.getName();
        console.log(name);
    }
}
Main.main();