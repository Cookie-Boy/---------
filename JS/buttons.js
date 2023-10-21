document.getElementById('choice_btn').onclick = function(event) {
    window.open("https://www.google.com/maps/search/шаурмания", "_blank");
}

document.getElementById('vk').onclick = function(event) {
    
    window.open("https://vk.com/im_banana_tyryryry", "_blank");
}

document.getElementById('tg').onclick = function(event) {
    window.open("https://t.me/+BaDiNvvEAOIyOGFi", "_blank");
}

document.getElementById('mail').onclick = function(event) {
    window.open("https://ghenyadog@bk.ru", "_blank");
}

document.getElementById('order_black_btn').onclick = function(event) {
    window.open("order.html", "_blank");
}

document.getElementById('git').onclick = function(event) {
    window.open("https://github.com/Cookie-Boy/Shaverma", "_blank");
}

Array.from(document.getElementsByClassName("to_order_btn")).forEach(
    function(element) {
        element.onclick = function(event) {
            window.open("order.html", "_blank");
        }
    }
)