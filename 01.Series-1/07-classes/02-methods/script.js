//07-classes/02-methods/script.js - 7.2: methods


(() => {
    document.getElementById("run").addEventListener("click", function () {

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        };
        sayHello() {
            return "Hello " + this.firstname + this.lastname; 
        }
    }
    let user = new Person("Loïc ", "Hobe");
    console.log(user.sayHello());
});
})();
