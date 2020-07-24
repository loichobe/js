// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {
    let x = document.getElementsByClassName("target");
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "owned";
    }
})();
