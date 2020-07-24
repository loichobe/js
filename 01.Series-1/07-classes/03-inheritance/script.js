// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    document.getElementById("run").addEventListener("click", function () {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    
    class Cat extends Animal {
        constructor(name, greeting) {
            super();
            this.name = name;
        }
        static greeting = "Nyan"
    }

    class Dog extends Animal {
        constructor(name, greeting) {
            super();
            this.name = name
        }
        static greeting = "Woofy"
    }

    let grumpy = new Cat("Rengar");
    let doggy = new Dog("Dorime");

    console.log(grumpy.sayHello());
    console.log(doggy.sayHello());

});
})();
