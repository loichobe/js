// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    document.getElementById('run').addEventListener('click', () => {

      let me = {
        firstname : "Loïc",
        lastname : "Hobe",
        age : "28 years old",
        city : "Binche",
        country : "Belgium",
      };
        console.log(me);
    });
})();
