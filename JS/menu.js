let goods = JSON.parse(localStorage.getItem("goods"));
let basket = JSON.parse(localStorage.getItem("basket"));
for(let count = 0; count < 3; count++)
{
for (let id in goods) {
    let element = document.createElement('div');
    element.classList.add('shavaObj');
    element.id = id;

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
    const texti4 = document.createTextNode(goods[id].composition);
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
                                                    });
    
    document.getElementById('shadow').addEventListener("click", function() {let info = document.getElementById('shava' + id);
                                                                            info.style.display = 'none';
                                                                            document.getElementById('shadow').style.display = 'none';            
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
    let shavainfo = document.getElementById('shavaInfo');
    shavainfo.appendChild(shavaInfo);
}
}