// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    document.getElementById("run").addEventListener("click", function () {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);
    console.log(people.size);
    console.log("Is Alexandre is here ? " + (people.has("Alexandre")));
});
})();
