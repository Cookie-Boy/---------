class Order {
    name;
    weight;
    quantity;
    cost;

    constructor(name, weight, quantity, cost) {
        this.name = name;
        this.weight = weight;
        this.quantity = quantity;
        this.cost = cost;
    }
}

let count = 0, sum = 0;
const ordersArray = [];
const purchaseList = document.getElementById("purchase-list");
const mainList = document.getElementById("main");
const basketCounter = document.getElementById("basket-counter");
const numberOfGoods = document.getElementById("number-goods");
const resultCost = document.getElementById("result-sum");

for (let j = 0; j < 4; j++) {
for (let i = localStorage.length - 1; i >= 0; i--) {
    let currentNode = JSON.parse(localStorage.getItem(localStorage.key(i)));

    let element = document.createElement("div");
    element.classList.add("item");
    element.classList.add("shava" + String(i));

    let image = document.createElement("img"); // Фотка
    image.classList.add("shava-image");
    image.src = currentNode.imageSrc;
    element.append(image);

    let textBlock = document.createElement("div"); // Текстовый блок с названием и описанием
    let header = document.createElement("h5");
    header.textContent = currentNode.name;
    let composition = document.createElement("p");
    composition.textContent = "Состав: " + currentNode.composition;
    let weight = document.createElement("p");
    weight.textContent = "Вес: " + currentNode.weight + " гр.";
    textBlock.classList.add("text-block");
    textBlock.append(header, composition, weight);
    element.append(textBlock);

    let counter = document.createElement("div"); // Плюс минус
    counter.classList.add("element-counter");
    let counterMinus = document.createElement("button");
    counterMinus.classList.add("counter-minus");
    counterMinus.textContent = "–";
    let counterText = document.createElement("h5");
    counterText.classList.add("counter-text");
    counterText.textContent = "1";
    let counterPlus = document.createElement("button");
    counterPlus.classList.add("counter-plus");
    counterPlus.classList.add("counter-plus-active");
    counterPlus.textContent = "+";
    counter.append(counterMinus, counterText, counterPlus);
    element.append(counter);

    let price = document.createElement("div"); // Цена
    price.classList.add("price-block");
    price.textContent = currentNode.cost + " р.";
    element.append(price);

    purchaseList.appendChild(element);
    ordersArray.push(new Order(currentNode.name, currentNode.weight, 1, currentNode.cost));
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

// Обработка нажатий на плюс и минус

Array.from(document.getElementsByClassName("item")).forEach(
    function(element, i) {
        element.querySelector(".counter-plus").onclick = function(event) {

            if (ordersArray[i].quantity == 1) {
                element.querySelector(".counter-minus").classList.add("counter-minus-active");
            }

            ordersArray[i].quantity++;
            count++;
            sum += ordersArray[i].cost;
            element.querySelector(".counter-text").textContent = ordersArray[i].quantity;
            element.querySelector(".price-block").textContent = String(ordersArray[i].cost * ordersArray[i].quantity) + " р.";
            basketCounter.textContent = "Корзина: " + String(count);
            numberOfGoods.textContent = String(count) + " шт.";
            resultCost.textContent = String(sum) + " р.";
        }

        element.querySelector(".counter-minus").onclick = function(event) {
            
            if (ordersArray[i].quantity == 2) {
                element.querySelector(".counter-minus").classList.remove("counter-minus-active");
            }
            
            if (ordersArray[i].quantity >= 2) {
                ordersArray[i].quantity--;
                count--;
                sum -= ordersArray[i].cost;
                element.querySelector(".counter-text").textContent = ordersArray[i].quantity;
            }

            element.querySelector(".price-block").textContent = String(ordersArray[i].cost * ordersArray[i].quantity) + " р.";
            basketCounter.textContent = "Корзина: " + String(count);
            numberOfGoods.textContent = String(count) + " шт.";
            resultCost.textContent = String(sum) + " р.";
        }
    }
);