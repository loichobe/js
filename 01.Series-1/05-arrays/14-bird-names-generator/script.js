// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    document.getElementById('run').addEventListener('click', () => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    let race = birds[Math.floor(Math.random() * birds.length)];
    let ad = Array.from(adjectives);
    let random = ad[Math.floor(Math.random() * ad.length)];
    if (race.fem == true) {
        document.getElementById("target").innerHTML = "La " + race.name + " " + random + "e";
    } else {
        document.getElementById("target").innerHTML = "Le " + race.name + " " + random;
    }
    });
})();
