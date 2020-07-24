// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    document.getElementById("run").addEventListener("click", function () {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    
    const animal = Object.fromEntries(keys.map(([keys, values]) => [keys, values]));

    console.log(animal);
    });
})();
