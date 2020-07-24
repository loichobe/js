// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)
// https://www.w3schools.com/jsref/jsref_regexp_not_0-9.asp

(() => {

let span = document.getElementById("pass-one")
let validity = document.getElementById("validity")

span.addEventListener("input", () => {
    if (span.value.length >= 8 && span.value.replace(/[^0-9]/g,"").length >= 2) {
        validity.innerHTML = "Ok"
     } else {
         validity.innerHTML = "Not Ok";
     }
})
})();
