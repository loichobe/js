
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here
    document.getElementById("red").addEventListener("click", function() {
        document.body.style.backgroundColor = "#ff0000";        
    });

    document.getElementById("green").addEventListener("click", function() {
        document.body.style.backgroundColor = "#00ff00";        
    });

    document.getElementById("blue").addEventListener("click", function() {
        document.body.style.backgroundColor = "#0000ff";        
    });

    document.getElementById("yellow").addEventListener("click", function() {
        document.body.style.backgroundColor = "#ffff00";        
    });

})();
