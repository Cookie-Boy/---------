const mainList = document.getElementById("main");
const historyList = document.getElementById("history-list");

let history = JSON.parse(localStorage.getItem("history"));

window.addEventListener("click", el => {
    const target = el.target;
    if (target.closest(".history-btn")) {
        historyList.style.display = "block";
        document.body.style.overflow = "hidden";
        mainList.style.pointerEvents = "none";
        historyList.style.pointerEvents = "all";
        
    } else if (!target.closest("#history-list")) {
        historyList.style.display = "none";
        document.body.style.overflow = "visible";
        mainList.style.pointerEvents = "all";
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
    let header = document.createElement("h5");
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
    date.classList.add("hist-item-text");
    dateBlock.append(date);

    element.append(image, headerBlock, priceBlock, dateBlock);
    historyList.appendChild(element);
}