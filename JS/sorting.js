let allItems = document.querySelectorAll('.list-items');

for (let index = 0; index < allItems.length; index++) {
    let switching = true;
    while (switching) {
        let items = allItems[index].querySelectorAll('.item');
        switching = false;
        for (let i = 1; i < (items.length - 1); i++) {
            let currentElement = items[i].querySelector('.item-text');
            let nextElement = items[i + 1].querySelector('.item-text');
            if (currentElement.innerHTML.toLowerCase() > nextElement.innerHTML.toLowerCase()) {
                allItems[index].insertBefore(items[i + 1], items[i]);
                switching = true;
                break;
            }
        }
    }
}

// Делаем так, чтобы Ёити Асакава был не в конце списка
[...gSurvivorItems].slice(1).forEach(item => {
    if (item.getAttribute('data-ctr') == 'Yoichi Asakawa') {
        item.querySelector('.item-text').textContent = 'Ёити Асакава';
    }
});