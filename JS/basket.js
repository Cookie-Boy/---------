const purchaseList = document.getElementById("purchase-list");
const mainList = document.getElementById("main");
const basketCounter = document.getElementById("basket-counter");
const numberOfGoods = document.getElementById("number-goods");
const resultCost = document.getElementById("result-sum");
const clearAllButton = document.querySelector(".clear-all-btn");

let goods = JSON.parse(localStorage.getItem("goods"));
let basket = JSON.parse(localStorage.getItem("basket"));
let history = JSON.parse(localStorage.getItem("history"));

function getNumberOfElements() {
    return Array.from(document.querySelectorAll(".item")).length;
}

function getResultSum() {
    let sum = 0;
    for (let id in basket) {
        sum += basket[id].cost * basket[id].quantity;
    }
    return sum;
}

function getQuantity() {
    let quantity = 0;
    for (let id in basket) {
        quantity += basket[id].quantity;
    }
    return quantity;
}

function setAllQuantitative() {
    basketCounter.textContent = "Корзина: " + String(getQuantity());
    numberOfGoods.textContent = String(getQuantity()) + " шт.";
    resultCost.textContent = String(getResultSum()) + " р.";
}

function setClearButtonStyle() {
    if (getNumberOfElements() > 0) {
        clearAllButton.style.display = "block";
    } else {
        clearAllButton.style.display = "none";
    }
}

function clearBasket() {
    for (let id in basket) {
        delete basket[id];
    }

    Array.from(document.querySelectorAll(".item")).forEach((element) => {
        purchaseList.removeChild(element);
    });

    setClearButtonStyle();

    localStorage.setItem("basket", JSON.stringify(basket));
    setAllQuantitative();
}

for (let id in basket) {

    let element = document.createElement("div");
    element.classList.add("item");
    element.id = "basket-" + id;

    let info = document.createElement("div");
    info.classList.add("info");

    let image = document.createElement("img"); // Фотка
    image.classList.add("shava-image");
    image.src = basket[id].imageSrc;
    info.append(image);

    let textBlock = document.createElement("div"); // Текстовый блок с названием и описанием
    let header = document.createElement("h5");
    header.textContent = basket[id].name;
    let composition = document.createElement("p");
    composition.textContent = "Состав: " + basket[id].composition;
    let weight = document.createElement("p");
    weight.textContent = "Вес: " + basket[id].weight + " гр.";
    textBlock.classList.add("text-block");
    textBlock.append(header, composition, weight);
    info.append(textBlock);

    let counter = document.createElement("div"); // Плюс минус
    counter.classList.add("element-counter");
    let counterMinus = document.createElement("button");
    counterMinus.classList.add("counter-minus");
    counterMinus.textContent = "–";
    if (basket[id].quantity > 1)
        counterMinus.classList.add("counter-minus-active");

    let counterText = document.createElement("h5");
    counterText.classList.add("counter-text");
    counterText.textContent = basket[id].quantity;

    let counterPlus = document.createElement("button");
    counterPlus.classList.add("counter-plus");
    counterPlus.classList.add("counter-plus-active");
    counterPlus.textContent = "+";
    counter.append(counterMinus, counterText, counterPlus);
    info.append(counter);

    let price = document.createElement("div"); // Цена
    price.classList.add("price-block");
    price.textContent = basket[id].cost * basket[id].quantity + " р.";
    info.append(price);

    let trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");

    let trashImage = document.createElement("img"); // Фотка
    trashImage.classList.add("trash-image");
    trashImage.src = "images/icons/trash.png";
    trashImage.alt = "Удалить";
    trashButton.append(trashImage);

    element.append(info, trashButton);

    purchaseList.appendChild(element);

    // Обработка нажатий на плюс и минус

    counterPlus.onclick = function(event) {
        if (basket[id].quantity == 1) {
            counterMinus.classList.add("counter-minus-active");
        }
        basket[id].quantity++;
        localStorage.setItem("basket", JSON.stringify(basket));
        counterText.textContent = basket[id].quantity;
        price.textContent = String(basket[id].cost * basket[id].quantity) + " р.";
        setAllQuantitative();
    }

    counterMinus.onclick = function(event) {
        if (basket[id].quantity == 2) {
            counterMinus.classList.remove("counter-minus-active");
        }
        
        if (basket[id].quantity >= 2) {
            basket[id].quantity--;
            localStorage.setItem("basket", JSON.stringify(basket));
            counterText.textContent = basket[id].quantity;
        }

        price.textContent = String(basket[id].cost * basket[id].quantity) + " р.";
        setAllQuantitative();
    }

    // Удаление элемента из корзины

    trashButton.addEventListener("click", () => {
        goods[id].quantity = 1;
        delete basket[id];
        purchaseList.removeChild(element);
        localStorage.setItem("basket", JSON.stringify(basket));
        setClearButtonStyle();
        setAllQuantitative();
    });
}

if (getNumberOfElements() > 3) {
    mainList.style.height = String(30 * getNumberOfElements()) + "vh";
}

document.querySelector(".to_order_all_btn").addEventListener("click", () => {
    for (let id in basket) {
        let count = Object.keys(history).length;
        history[count] = basket[id];

        const date = new Date();
        let fullDate = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
        let hours = "в ";
        if (date.getHours() < 10)
            hours += "0" + date.getHours();
        else
            hours += date.getHours();

        if (date.getMinutes() < 10)
            hours += ":0" + date.getMinutes();
        else
            hours += ":" + date.getMinutes();

        history[count]['date'] = fullDate;
        history[count]['hours'] = hours;
    }

    clearBasket();
    localStorage.setItem("history", JSON.stringify(history));
});


clearAllButton.addEventListener("click", () => clearBasket());

setAllQuantitative();
setClearButtonStyle();