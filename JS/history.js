const mainList = document.getElementById("main");
const historyBlock = document.getElementById("history-block");
const historyList = document.getElementById("history-list");

let history = JSON.parse(localStorage.getItem("history"));

function getNumberOfElements() {
    return Array.from(document.querySelectorAll(".h-item")).length;
}

window.addEventListener("click", el => {
    const target = el.target;
    if (target.closest(".history-btn")) {
        historyBlock.style.display = "block";
        mainList.style.filter = "blur(10px)";
        document.body.style.overflow = "hidden";
        mainList.style.pointerEvents = "none";
        historyBlock.style.pointerEvents = "all"; // т.к. применяется ко всем дочерним блокам
    } else if (!target.closest("#history-block") || target.closest("#close-btn")) {
        historyBlock.style.display = "none";
        document.body.style.overflow = "visible";
        mainList.style.pointerEvents = "all";
        mainList.style.filter = "blur(0px)";
    }

});

for (let id in history) {

    let element = document.createElement("div");
    element.classList.add("h-item");
    element.id = "hist-" + id;

    let image = document.createElement("img"); // Фотка
    image.classList.add("hist-shava-image");
    image.src = history[id].imageSrc;

    let headerBlock = document.createElement("div");
    headerBlock.classList.add("hist-shava-name");
    let header = document.createElement("p");
    header.textContent = history[id].name;
    header.classList.add("hist-item-text");
    headerBlock.append(header);

    let priceBlock = document.createElement("div");
    priceBlock.classList.add("hist-shava-price");
    let price = document.createElement("p");
    price.textContent = history[id].cost * history[id].quantity + " р.\t/\t" + history[id].quantity + " шт.";
    price.classList.add("hist-item-text");
    priceBlock.append(price);

    let dateBlock = document.createElement("div");
    dateBlock.classList.add("hist-shava-date");
    let date = document.createElement("p");
    date.textContent = history[id].date;
    date.classList.add("hist-item-date");
    let hours = document.createElement("p");
    hours.textContent = history[id].hours;
    hours.classList.add("hist-item-hours");
    dateBlock.append(date, hours);

    element.append(image, headerBlock, priceBlock, dateBlock);
    historyList.appendChild(element);
}

document.querySelector("#history-counter").textContent = "Всего заказов: " + getNumberOfElements();