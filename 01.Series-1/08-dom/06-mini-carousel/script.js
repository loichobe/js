// 06-dom/06-mini-carousel/script.js - 6.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let img = document.querySelector(".material img");
    let x = 0;
    document.getElementById("next").addEventListener("click", () => {
        x === gallery.length - 1 ? x = 0 : x++;
        img.setAttribute("src", gallery[x])
    });
})();
