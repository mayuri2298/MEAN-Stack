class calculator {
    add(n1, n2) {
        return n1 + n2;
    }
    subtract(n1, n2) {
        return n1 - n2;
    }
    static main() {
        let obj = new calculator();
        let addition = obj.add(20, 10);
        let subtraction = obj.subtract(40, 15);
        console.log(addition);
        console.log(subtraction);
    }
}
calculator.main();