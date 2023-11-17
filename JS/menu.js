let goods = JSON.parse(localStorage.getItem("goods"));
let basket = JSON.parse(localStorage.getItem("basket"));
for (let i = 0; i < 2; i++)
{
for (let id in goods) {
    let element = document.createElement('div');
    element.classList.add('shavaObj');
    element.id = id;

    const img = document.createElement('img');
    img.src = goods[id].imageSrc;
    img.addEventListener("click", function() {
                                                
                                                    })
    element.append(img);

    const weight = document.createElement('div');
    const text = document.createTextNode(goods[id].weight + " г");
    weight.classList.add('weight');
    weight.append(text);
    element.append(weight);

    const cost = document.createElement('div');
    cost.classList.add('cost');
    const text1 = document.createTextNode(goods[id].cost + " ₽");
    cost.append(text1);
    element.append(cost);

    const button = document.createElement("button");
    button.classList.add('addButton');

    if (basket[id]) {
        button.textContent = "В корзине";
    } else {
        button.textContent = "Добавить в корзину";
    }

    element.append(button);

    button.addEventListener("click", () => {
        if (!basket[id]) {
            button.textContent = "В корзине";
            basket[id] = goods[id];
        } else {
            button.textContent = "Добавить в корзину";
            delete basket[id];
        }
        localStorage.setItem("basket", JSON.stringify(basket));
    });

    let shavaList = document.getElementById('shavaList');
    shavaList.appendChild(element);
}
}