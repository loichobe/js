// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {
    document.getElementById('run').addEventListener('click', () => {
    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

        if (fruits.includes("apple")) {
            console.log("Yes, there is an apple");
        } else {
            console.log("No, there isn't an apple");
        }
    });
})();
