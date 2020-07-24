
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let current = new Date();
    let day = current.getDate();
    let m = current.getMonth();
    let y = current.getFullYear();
    let hour = current.getHours();
    let min = current.getMinutes();
    let sec = current.getSeconds();

    document.getElementById("target").innerHTML = current;
})();
