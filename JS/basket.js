let element;
const purchaseList = document.getElementById("purchase-list");
const mainList = document.getElementById("main");
const basketCounter = document.getElementById("basket-counter");
const numberOfGoods = document.getElementById("number-goods");
const resultCost = document.getElementById("result-sum");

main.style.height = "100vh";
let count = 0;
let sum = 0;

for (let j = 0; j < 2; j++) {
for (let i = localStorage.length - 1; i >= 0; i--) {
    let currentNode = JSON.parse(localStorage.getItem(localStorage.key(i)));

    let element = document.createElement("div");
    element.classList.add("shava" + String(i));

    let image = document.createElement("img"); // фотка
    image.classList.add("shava-image");
    image.src = currentNode.imageSrc;
    element.append(image);

    let textBlock = document.createElement("div"); // текстовый блок с названием и описанием
    let header = document.createElement("h5");
    header.textContent = currentNode.name;
    let composition = document.createElement("p");
    composition.textContent = "Состав: " + currentNode.composition;
    let weight = document.createElement("p");
    weight.textContent = "Вес: " + currentNode.weight + " гр.";
    textBlock.classList.add("text-block");
    textBlock.append(header, composition, weight);
    element.append(textBlock);

    let counter = document.createElement("div"); // плюс минус
    counter.classList.add("element-counter");
    let counterMinus = document.createElement("button");
    counterMinus.classList.add("counter-minus");
    counterMinus.textContent = "-";
    let counterText = document.createElement("h5");
    counterText.classList.add("counter-text");
    counterText.textContent = "1";
    let counterPlus = document.createElement("button");
    counterPlus.classList.add("counter-plus");
    counterPlus.textContent = "+";
    counter.append(counterMinus, counterText, counterPlus);
    element.append(counter);

    let price = document.createElement("div");
    price.classList.add("price-block");
    price.textContent = currentNode.cost + " р.";
    element.append(price);

    purchaseList.appendChild(element);
    count++;
    sum += currentNode.cost;
}
}

if (count > 3) {
    mainList.style.height = String(30 * count) + "vh";
}

basketCounter.textContent = "Корзина: " + String(count);
numberOfGoods.textContent = String(count) + " шт.";
resultCost.textContent = String(sum) + " р.";