// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {
    let span = document.getElementById("pass-one");
    let counter = document.getElementById("counter");

    span.addEventListener("input", () => {
    span.value.length > 10 && (span.value = span.value.substring(0, span.value.length -1));
    counter.innerHTML = span.value.length + "/10";   
    });
})();
