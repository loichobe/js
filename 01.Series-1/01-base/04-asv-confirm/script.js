
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
})();

do {
    var a = prompt("What is your age ?");
    var s = prompt("What is your gender ?");
    var v = prompt("Where do you live ?");
    var c = confirm("You're " + a + ", you are a " + s + ", you live in " + v + ".")
} while (c !=true);
 
