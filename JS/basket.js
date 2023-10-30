let count = 0;
const purchaseList = document.getElementById("purchase-list");
const mainList = document.getElementById("main");
const basketCounter = document.getElementById("basket-counter");
const numberOfGoods = document.getElementById("number-goods");
const resultCost = document.getElementById("result-sum");

function getResultSum() {
    let sum = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let currentNode = JSON.parse(localStorage.getItem(localStorage.key(i)));

        if (currentNode.isSelected == true)
            sum += currentNode.cost * currentNode.quantity;
    }
    return sum;
}

function getQuantity() {
    let quantity = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let currentNode = JSON.parse(localStorage.getItem(localStorage.key(i)));
        
        if (currentNode.isSelected == true)
            quantity += currentNode.quantity;
    }
    return quantity;
}

function setAllQuantitative() {
    basketCounter.textContent = "Корзина: " + String(getQuantity());
    numberOfGoods.textContent = String(getQuantity()) + " шт.";
    resultCost.textContent = String(getResultSum()) + " р.";
}

for (let i = 0; i < localStorage.length; i++) {
    let currentNode = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if (currentNode.isSelected == true) {
        let element = document.createElement("div");
        element.classList.add("item");
        element.id = "basket-" + i;

        let info = document.createElement("div");
        info.classList.add("info");
    
        let image = document.createElement("img"); // Фотка
        image.classList.add("shava-image");
        image.src = currentNode.imageSrc;
        info.append(image);
    
        let textBlock = document.createElement("div"); // Текстовый блок с названием и описанием
        let header = document.createElement("h5");
        header.textContent = currentNode.name;
        let composition = document.createElement("p");
        composition.textContent = "Состав: " + currentNode.composition;
        let weight = document.createElement("p");
        weight.textContent = "Вес: " + currentNode.weight + " гр.";
        textBlock.classList.add("text-block");
        textBlock.append(header, composition, weight);
        info.append(textBlock);
    
        let counter = document.createElement("div"); // Плюс минус
        counter.classList.add("element-counter");
        let counterMinus = document.createElement("button");
        counterMinus.classList.add("counter-minus");
        counterMinus.textContent = "–";
        if (currentNode.quantity > 1)
            counterMinus.classList.add("counter-minus-active");

        let counterText = document.createElement("h5");
        counterText.classList.add("counter-text");
        counterText.textContent = currentNode.quantity;

        let counterPlus = document.createElement("button");
        counterPlus.classList.add("counter-plus");
        counterPlus.classList.add("counter-plus-active");
        counterPlus.textContent = "+";
        counter.append(counterMinus, counterText, counterPlus);
        info.append(counter);
    
        let price = document.createElement("div"); // Цена
        price.classList.add("price-block");
        price.textContent = currentNode.cost * currentNode.quantity + " р.";
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
        count++;

        // Обработка нажатий на плюс и минус

        counterPlus.onclick = function(event) {
            if (currentNode.quantity == 1) {
                counterMinus.classList.add("counter-minus-active");
            }
            currentNode.quantity++;
            localStorage.setItem(i, JSON.stringify(currentNode));
            counterText.textContent = currentNode.quantity;
            price.textContent = String(currentNode.cost * currentNode.quantity) + " р.";
            setAllQuantitative();
        }

        counterMinus.onclick = function(event) {
            if (currentNode.quantity == 2) {
                counterMinus.classList.remove("counter-minus-active");
            }
            
            if (currentNode.quantity >= 2) {
                currentNode.quantity--;
                localStorage.setItem(i, JSON.stringify(currentNode));
                counterText.textContent = currentNode.quantity;
            }
    
            price.textContent = String(currentNode.cost * currentNode.quantity) + " р.";
            setAllQuantitative();
        }

        // Удаление элемента из корзины

        trashButton.addEventListener("click", () => {
            currentNode.isSelected = false;
            currentNode.quantity = 1;
            localStorage.setItem(i, JSON.stringify(currentNode));
            purchaseList.removeChild(element);
            setAllQuantitative();
        })
    }
}

if (count > 3) {
    mainList.style.height = String(30 * count) + "vh";
}

setAllQuantitative();