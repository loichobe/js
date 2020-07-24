
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let year = document.getElementById("year").value;
        let friday = [];
        for (let i = 0; i < 12; i++) {
            let date = new Date(year, i, 13);
            date.getDay() === 5 && friday.push(month[i]);
        }
        alert(friday);
    });
})();