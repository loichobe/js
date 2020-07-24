// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {

    let target = document.getElementById("target");
    let table = document.createElement("table");
    target.appendChild(table);
    for (let i = 0; i < 10; i++) {
        table.insertRow(0).insertCell(0);
    }

})();
