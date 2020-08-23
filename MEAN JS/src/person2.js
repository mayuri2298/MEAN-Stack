class person {
    getName() {
        return "I am mayuri";
    }
    getAddr() {
        return "From Ratnagiri";
    }
    getPersonDetails() {
        const name = this.getName();
        const addr = this.getAddr();

        return name + " " + addr;
    }
    static main() {
        let obj = new person();
        const details = obj.getPersonDetails();
        console.log(details);
    }
}
person.main();