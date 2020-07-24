// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    document.getElementById("run").addEventListener("click", function () {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
            get name() {
                return ("Your name is : " + this.firstname + " " + this.lastname);
            }
            set name(fullname) {
                [this.firstname, this.lastname] = fullname.split(" ");
            }
        }
        let stranger = new Person("Pierre", "Richard");
        console.log(stranger);

        stranger.name = "Jean Reno";
        console.log(stranger);

        stranger.name = "Christian Clavier";
        console.log(stranger);
    });
})();
