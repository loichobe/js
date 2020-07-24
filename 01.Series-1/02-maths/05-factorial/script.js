
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
    function factorialize(num) {
        var result = num;
        if (num === 0 || num === 1)
        return 1;
        while (num > 1) {
            num--;
            result *= num;
        }
        return result;
    }
    alert(factorialize(parseInt(document.getElementById("number").value)));

    });

})();
