// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {
    document.getElementById('run').addEventListener('click', () => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    let unique = [...new Set(fruits)];
    console.log(unique);
    });

})();
