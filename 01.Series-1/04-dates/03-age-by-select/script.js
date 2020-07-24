
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let dob = new Date(document.getElementById("dob-month").value + " " + document.getElementById("dob-day").value + " " + document.getElementById("dob-year").value);
        let current = new Date();
        let day = (current.getDate() - dob.getDate());
        let month = (current.getMonth() - dob.getMonth());
        let year = (current.getFullYear() - dob.getFullYear());

        if (month > dob.getMonth) {
            year = year -1
        }
        if (month = dob.getMonth && day < dob.getDate) {
            year = year -1
        }
        alert(year + "years old");
    })




})();
