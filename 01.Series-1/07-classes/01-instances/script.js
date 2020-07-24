// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    document.getElementById("run").addEventListener("click", function () {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let Skitty = new Cat("Skitty", "9 years old");
    let Pixel = new Cat("Pixel", "6 years old");

    console.log(Skitty.name + " " + Skitty.age + " " + Pixel.name + " " + Pixel.age)

});
})();
