const form = document.querySelector("form");
const span = document.querySelector(".coste-total");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    calcularCoste(event);
})


const calcularCoste = (e) => {
    let noches = parseInt(e.target.noches.value);
    let ciudad = e.target.ciudad.value;
    let hotel = costeHotel(noches);
    let avion = costeAvion(ciudad, noches);
    let coche = costeCoche(parseInt(e.target.coche.value));
    span.innerText = `${hotel + avion + coche}`;
}


const costeHotel = (nNochesHotel) => {
    return nNochesHotel * 140;
}

const costeAvion = (city, nNoches) => {
    let costeNocheCity = 0;
    switch (city.toLowerCase()) {
        case "barcelona":
            costeNocheCity = 90;
            break;
        case "madrid":
            costeNocheCity = 90;
            break;
        case "sevilla":
            costeNocheCity = 50;
            break;
        case "valencia":
            costeNocheCity = 40;
            break;
        default:
            break;
    }
    if (nNoches > 3) {
        return costeNocheCity * nNoches * 0.90;
    } else {
        return costeNocheCity * nNoches;
    }
}


const costeCoche = (nDiasCoche) => {
    let total = 0;
    if (nDiasCoche == 0) {
        total = 0;
        return total;
    }
    if (nDiasCoche >= 3) {
        total = (nDiasCoche * 40) - 20;
    } if (nDiasCoche >= 7) {
        total = (nDiasCoche * 40) - 50;
    } else {
        total = nDiasCoche * 40;
    }
    return total;
}