class Shaverma {

    name;
    imageSrc;
    description;
    weight;
    cost;
    composition;
    isSelected = true; // Пока так

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

if (localStorage.length == 0) {
    black = new Shaverma('Шаурма "Black"', 'images/header_page/black_shaverma.jpeg', 'Вкусная чёрная шава, хороша для негров', 340, 400, 'Черный лаваш, свинина, картошка фри, маринованный огурчик, свежий помидор, чёрный фирменный соус, краситель: натуральные чернила осьминога', 1);
    gigant = new Shaverma('Шаурма Гигант', 'images/header_page/XXL_shaverma.png', 'Большая шаурма для больших мальчиков', 600, 600, 'Лаваш, говядина, куриное филе, картошка фри, перец халапеньо, свежий помидор, маринованный огурчик, корейская морковка, острый соус', 1);
    
    localStorage.setItem(0, JSON.stringify(black));
    localStorage.setItem(1, JSON.stringify(gigant));
}