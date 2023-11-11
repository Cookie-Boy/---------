class Shaverma {

    name;
    imageSrc;
    description;
    weight;
    cost;
    composition;

    constructor(name, imageSrc, description, weight, cost, composition, quantity) {
        this.name = name;
        this.imageSrc = imageSrc;
        this.description = description;
        this.weight = weight;
        this.cost = cost;
        this.composition = composition;
        this.quantity = quantity;
    }
}

if (localStorage.length != 0) {
    black = new Shaverma('Шаурма "Black"', 'images/header_page/black_shaverma.png', 'Вкусная чёрная шава, хороша для негров', 340, 400, 'Черный лаваш, свинина, картошка фри, маринованный огурчик, свежий помидор, чёрный фирменный соус, краситель: натуральные чернила осьминога', 1);
    bigBro = new Shaverma('Шаурма Биг Бро', 'images/header_page/XXL.jpg','Новинка! Новый, свежий, многогранный вкус, который собрал в себе то, что понравится каждому! То, что мы все так сильно любим!!', 450, 500,'Розовый лаваш, мясо креветок, горчичный соус, пекинская капуста, соус барбекю, сырный соус, перец халапеньо, свежая морковка, семена подсолнечника', 1);
    gigant = new Shaverma('Шаурма Гигант', 'images/header_page/XXL_shaverma.png', 'Большая шаурма для больших мальчиков', 600, 600, 'Лаваш, говядина, куриное филе, картошка фри, перец халапеньо, свежий помидор, маринованный огурчик, корейская морковка, острый соус', 1);
    }

    let goods = new Object( {0: black, 1: bigBro, 2: gigant} );
    let basket = new Object();
    let history = new Object();

    localStorage.setItem("goods", JSON.stringify(goods));
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("history", JSON.stringify(history));
