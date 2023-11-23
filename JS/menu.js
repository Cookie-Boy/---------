let goods = JSON.parse(localStorage.getItem("goods"));
let basket = JSON.parse(localStorage.getItem("basket"));
for (let id in goods) {
    let element = document.createElement('div');
    element.classList.add('shavaObj');
    element.id = id;

    let dark = document.createElement('div');
    dark.classList.add('dark');

    const weight = document.createElement('div');
    const text = document.createTextNode(goods[id].weight + " г");
    weight.classList.add('weight');
    weight.append(text);
    element.append(weight);

    const weighti = document.createElement('div');
    const texti = document.createTextNode(goods[id].weight + " г");
    weighti.classList.add('weighti');
    weighti.append(texti);

    const cost = document.createElement('div');
    cost.classList.add('cost');
    const text1 = document.createTextNode(goods[id].cost + " ₽");
    cost.append(text1);
    element.append(cost);

    const costi = document.createElement('div');
    costi.classList.add('costi');
    const texti1 = document.createTextNode(goods[id].cost + " ₽");
    costi.append(texti1);

    const name = document.createElement('div');
    name.classList.add('name');
    const text2 = document.createTextNode(goods[id].name);
    name.append(text2);
    element.append(name)

    const namei = document.createElement('div');
    namei.classList.add('namei');
    const texti2 = document.createTextNode(goods[id].name);
    namei.append(texti2);

    const descriptioni = document.createElement('div');
    descriptioni.classList.add('descriptioni');
    const texti3 = document.createTextNode(goods[id].description);
    descriptioni.append(texti3);

    const compositioni = document.createElement('div');
    compositioni.classList.add('compositioni');
    const texti4 = document.createTextNode('Состав: ' + goods[id].composition);
    compositioni.append(texti4);

    let shavaInfo = document.createElement('div');
    shavaInfo.classList.add('shavaInfo');
    shavaInfo.id = 'shava' + id;

    const picture = document.createElement('img');
    picture.src = goods[id].imageSrc;

    const img = document.createElement('img');
    img.id = id;
    img.src = goods[id].imageSrc;
    shavaInfo.append(weighti, costi, namei, descriptioni, compositioni, picture); 
    img.addEventListener("click", function() {let info = document.getElementById('shava' + id);
                                                info.style.display = 'block';
                                                document.getElementById('shadow').style.display = 'block';
                                                dark.style.display = 'block'; 
                                                document.body.style.overflow = "hidden";          
                                                    });
    
    dark.addEventListener("click", function() {let info = document.getElementById('shava' + id);
                                                                            info.style.display = 'none';
                                                                            document.getElementById('shadow').style.display = 'none'; 
                                                                            dark.style.display = 'none'; 
                                                                            document.body.style.overflow = "auto";               
                                                                            });

    document.getElementById('shadow').addEventListener("click", function() {let info = document.getElementById('shava' + id);
                                                                            info.style.display = 'none';
                                                                            document.getElementById('shadow').style.display = 'none'; 
                                                                            dark.style.display = 'none'; 
                                                                            document.body.style.overflow = "auto";               
                                                                            });

    element.append(img);
    shavaInfo.style.display = 'none';


    const button = document.createElement("button");
    button.classList.add('addButton');

    if (basket[id]) {
        button.textContent = "В корзине";
    } else {
        button.textContent = "Добавить в корзину";
    }

    const buttoni = document.createElement("button");
    buttoni.classList.add('addButtoni');

    if (basket[id]) {
        buttoni.textContent = "В корзине";
    } else {
        buttoni.textContent = "Добавить в корзину";
    }

    element.append(button);
    shavaInfo.append(buttoni);

    button.addEventListener("click", () => {
        if (!basket[id]) {
            button.textContent = "В корзине";
            buttoni.textContent = "В корзине";
            basket[id] = goods[id];
        } else {
            button.textContent = "Добавить в корзину";
            buttoni.textContent = "Добавить в корзину";
            delete basket[id];
        }
        localStorage.setItem("basket", JSON.stringify(basket));
    });

    buttoni.addEventListener("click", () => {
        if (!basket[id]) {
            button.textContent = "В корзине";
            buttoni.textContent = "В корзине";
            basket[id] = goods[id];
        } else {
            button.textContent = "Добавить в корзину";
            buttoni.textContent = "Добавить в корзину";
            delete basket[id];
        }
        localStorage.setItem("basket", JSON.stringify(basket));
    });

    let shavaList = document.getElementById('shavaList');
    shavaList.appendChild(element);
    shavaList.appendChild(shavaInfo);
    shavaList.append(dark);
}