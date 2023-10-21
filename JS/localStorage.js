class shaverma {

    imageSrc;
    description;
    weight;
    cost;
    composition;
    isSelected = false;

    constructor(imageSrc, description, weight, cost, composition) {
        this.imageSrc = imageSrc;
        this.description = description;
        this.weight = weight;
        this.cost = cost;
        this.composition = composition;
    }
}

black = new shaverma('images/header_page/black_shaverma.jpeg', 'Вкусная чёрная шава, хороша для негров', 340, 400, 'Черный лаваш, свинина, картошка фри, маринованный огурчик, свежий помидор, чёрный фирменный соус, краситель: натуральные чернила осьминога');
gigant = new shaverma('images/header_page/XXL_shaverma.png', 'Большая шаурма для больших мальчиков', 600, 600, 'лаваш, говядина, куриное филе, картошка фри, перец халапеньо, свежий помидор, маринованный огурчик, корейская морковка, острый соус');

localStorage.setItem('black', JSON.stringify(black));
localStorage.setItem('gigant', JSON.stringify(gigant));s