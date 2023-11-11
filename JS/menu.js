let goods = JSON.parse(localStorage.getItem("goods"));
let basket = JSON.parse(localStorage.getItem("basket"));
for (let i = 0; i < 2; i++)
{
for (let id in goods) {
    let element = document.createElement('div');
    element.classList.add('shavaObj');

    const img = document.createElement('img');
    img.src = goods[id].imageSrc;
    img.classList.add("photo");
    element.append(img);

    const text = document.createTextNode(goods[id].composition);
    element.append(text)
    const button = document.createElement("button");
    button.style.color = "black";

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