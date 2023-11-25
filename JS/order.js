const purchaseList = document.getElementById("purchase-list");
const mainList = document.getElementById("main");
const basketCounter = document.getElementById("basket-counter");
const numberOfGoods = document.createTextNode("ry");
const resultCost = document.createTextNode("yui");
numberOfGoods.id = "numberOfGoods";
resultCost.id = "result-sum"



let goods = JSON.parse(localStorage.getItem("goods"));
let basket = JSON.parse(localStorage.getItem("basket"));
let history = JSON.parse(localStorage.getItem("history"));

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

function setAllQuantity() {
    basketCounter.textContent = "Всего товаров: " + String(getQuantity());
    numberOfGoods.textContent = String(getQuantity()) + " шт.";
    resultCost.textContent = String(getResultSum()) + " р.";
}

for (let id in basket) {    

    let element = document.createElement("div");
    element.classList.add("item");
    element.id = "basket-" + id;

    let image = document.createElement("img"); // Фотка
    image.classList.add("shava-image");
    image.src = basket[id].imageSrc;
    element.append(image);

    let textBlock = document.createElement("div"); // Текстовый блок с названием и описанием
    let header = document.createElement("h5");
    let quantity = document.createElement("div");
    quantity.textContent = basket[id].quantity + " шт.";
    header.textContent = basket[id].name;
    header.style.width = "50%";
    let composition = document.createElement("p");
    composition.textContent = "Состав: " + basket[id].composition;
    let weight = document.createElement("p");
    weight.textContent = "Вес: " + basket[id].weight + " гр.";
    textBlock.classList.add("text-block");
    textBlock.append(header, composition, weight);
    element.append(textBlock);

    let counterText = document.createElement("h5");
    counterText.classList.add("counter-text");
    counterText.textContent = basket[id].quantity;

    let price = document.createElement("div"); // Цена
    price.classList.add("price-block");
    price.textContent = basket[id].cost * basket[id].quantity + " р.";
    element.append(quantity, price);
    purchaseList.appendChild(element);
    setAllQuantity();
}

const cal = document.querySelector(".cal");
cal .addEventListener("click", function() {
                                            document.querySelector(".calendar").style.zIndex = "100";
                                            document.querySelector(".table").style.display = "block";
                                            setTimeout(() => {document.querySelector(".calendar").style.zIndex = "-100";
                                                                document.querySelector(".table").style.display = "none";}, 5 * 1000)
                                        });

document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("calDate").value = " ";
    document.getElementById("number").value = " ";
    document.getElementById("date").value = " ";
    document.getElementById("cvv").value = " ";
    document.getElementById("Name").value = " ";
    document.getElementById("Date").value = " ";
    document.getElementById("time").value = " ";
    document.querySelectorAll(".box").value = " ";
    localStorage.setItem("history",  JSON.stringify(basket));
    localStorage.setItem("basket", JSON.stringify(new Object()));
    window.location.href = 'menu.html';
}
)