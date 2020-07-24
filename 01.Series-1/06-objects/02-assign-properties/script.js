//06-objects/02-assign-properties/script.js - 6.2: assign properties
(() => {
    document.getElementById('run').addEventListener('click', () => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // Boucle pour tous les ordinateurs
    for (let i = 0; i < computers.length; i++) {
        // Utilisation de la méthode hasOwnProperty pour vérifier que l'objet a la propriété (Boolean)
        // Si la condition est true, il faut laisser la condition seule
        // ! est utilisé pour inverser celle-ci dans le cas d'un false
        if (!computers[i].hasOwnProperty("available")) {
        // Change la valeur du tableau par l'objet defaultProps
            computers[i].available = defaultProps.available;
        }
        if (!computers[i].hasOwnProperty("os")) {
            computers[i].os = defaultProps.os;
        }
        if (!computers[i].hasOwnProperty("user")) {
            computers[i].user = defaultProps.user;
        }
    }
    console.log(computers);
    });
})();
