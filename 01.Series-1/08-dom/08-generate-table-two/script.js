// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    
    let target = document.getElementById("target");
    let table = document.createElement("table");
    target.appendChild(table);
    for (let i = 0; i < 10; i++) {
        let row = table.insertRow(i)
        for (let j = 0; j < 10; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = (i + 1) * (j + 1);
        }
    }

})();
