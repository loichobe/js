(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let arr = [];
        for(let i = 1; i < 22; i++){
            arr.push(parseInt(i**(2)));
        }
        alert(arr);
    });

})();