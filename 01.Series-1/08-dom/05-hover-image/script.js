// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    let img = document.querySelector(".material img");
    let source = img.getAttribute("data-hover");
    img.addEventListener("mouseover", () => {
        img.setAttribute("src", source);
    });
})();
