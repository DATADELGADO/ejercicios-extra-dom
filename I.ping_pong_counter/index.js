const counter = document.querySelector(".counter").children;
const players = document.querySelector(".players").children;
const maxPoint = document.querySelector(".max-points");
let max = 3;
maxPoint.addEventListener("click", (e) => {
    max = e.target.value;
})
players[0].addEventListener("click", () => {
    if (parseInt(counter[0].innerText) < max) {
        counter[0].innerText = parseInt(counter[0].innerText) + 1;
    }
});
players[1].addEventListener("click", () => {
    if (parseInt(counter[1].innerText) < max) {
        counter[1].innerText = parseInt(counter[1].innerText) + 1;
    }
});
players[2].addEventListener("click", () => {
    counter[0].innerText = "0";
    counter[1].innerText = "0"
});



