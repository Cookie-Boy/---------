let element;
let purchaseList = document.getElementById("purchase-list");
let main = document.getElementById("main");
main.style.height = "124vh";
let count = 0;

for (let i = 0; i < 10; i++) {
    element = document.createElement("div");
    element.classList.add("first");

    if (count > 4) {
        main.style.height = String(30 * count) + "vh";
    }
    purchaseList.appendChild(element);
    count++;
}
