(() => {

  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", () => {

      // your code here
      var points = [2, 4, 14, 10, 90, 23, 16];
      points.sort(function(a, b){return a - b});
      alert(points);
  });

})();