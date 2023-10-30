for(let i = 0; i < localStorage.length; i++)
{
    let currentNode = JSON.parse(localStorage.getItem(localStorage.key(i)));

    let element = document.createElement('div');
    element.classList.add('shavaObj'+ String(i));

    const img = document.createElement('img');
    img.src = currentNode.imageSrc;
    element.append(img);

    const text = document.createTextNode(currentNode.composition);
    element.append(text)
    const button = document.createElement("button");
    button.style.color = "black";

    if (currentNode.isSelected == false) {
        button.textContent = "Добавить в корзину";
    } else {
        button.textContent = "В корзине";
    }

    element.append(button);

    button.addEventListener("click", () => {
        if (currentNode.isSelected == false) {
            currentNode.isSelected = true;
            button.textContent = "В корзине";
        } else {
            currentNode.isSelected = false;
            button.textContent = "Добавить в корзину";
        }
        localStorage.setItem(i, JSON.stringify(currentNode));
    });

    let shavaList = document.getElementById('shavaList');
    shavaList.appendChild(element);
}