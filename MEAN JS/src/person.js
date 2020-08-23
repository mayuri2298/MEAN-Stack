class person {
    constructor() {
        console.log("I am constructor");
    }

    getName() {
        return "I am mayuri";
    }

    static main() {
        let obj = new person();
        const name = obj.getName();
        console.log(name);
    }
}
person.main();