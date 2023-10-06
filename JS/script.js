let gCharacterList = document.querySelector('.killer-list');
let gSelector = document.querySelector('.selection');
let gSelect = gCharacterList.querySelector('.select');
let gItems = gCharacterList.querySelectorAll('.item');
let gSurvivorItems = document.querySelector('.survivor-list').querySelectorAll('.item');
let gKillerItems = document.querySelector('.killer-list').querySelectorAll('.item');


function collectArray() {
    let array = [];
    [...gItems].slice(1).forEach(item => {
        if (!item.classList.contains('unchecked')) {
            array.push(item.getAttribute('data-ctr'));
        }
    });
    return array;
}

function collectRusArray() {
    let rusArray = [];
    [...gItems].slice(1).forEach(item => {
        if (!item.classList.contains('unchecked')) {
            let name = item.querySelector('.item-text');
            rusArray.push(name.textContent);
        }
    });
    return rusArray;  
}

// Массив с именами, массив с русскими именами, название класса картинки, название класса имени
function randomize(array, rusArray, iClass, nClass, flag) {
    if (!array.length) {
        alert("Нужно выбрать как минимум одного персонажа!");
        return;
    }
    let rand = Math.floor(Math.random() * array.length);
    let image = document.querySelector(iClass);
    let name = document.querySelector(nClass);
    if (flag)
        image.setAttribute('src', 'images/survivors/' + array[rand] + '.webp');
    else
        image.setAttribute('src', 'images/killers/' + array[rand] + '.webp');
    name.textContent = rusArray[rand];
}

function getRandomCharacter() {
    let flag = gSelector.classList.contains('killers');
    randomize(collectArray(), collectRusArray(), '.character-image', '.character-name', flag);
}

function clickOnMainButton() {
    let flag = gSelector.classList.contains('killers');
    randomize(collectArray(), collectRusArray(), '.character-image', '.character-name', flag);
}

function showCharacterList() {
    let listItems = gCharacterList.querySelector('.list-items');
    listItems.classList.toggle('show');
}

window.onclick = function(event) {
    const classes = ['.select', '.item', '.filter', '.item-text', '.checkbox', '.check-icon'];
    let listItems = gCharacterList.querySelector('.list-items');
    if (listItems.classList.contains('show')) {
        if (classes.every(element => !event.target.matches(element))) {
            listItems.classList.toggle('show');
        }
    }
}

const allValuesUnchecked = value => value.classList.contains('unchecked');
const allValuesChecked = value => !value.classList.contains('unchecked');

gSurvivorItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('select')) {
            item.classList.toggle('unchecked');
            if ([...gItems].slice(1).every(allValuesChecked)) {
                gSelect.classList.remove('unchecked');
                console.log('all checked');
            } else if ([...gItems].slice(1).every(allValuesUnchecked)) {
                console.log('all unchecked');
                gSelect.classList.add('unchecked');
            }
        } else {
            if (gSelect.classList.contains('unchecked')) {
                gSelect.classList.remove('unchecked');
                gItems.forEach(item => {
                    item.classList.remove('unchecked');
                });
            } else {
                gSelect.classList.add('unchecked');
                gItems.forEach(item => {
                    item.classList.add('unchecked');
                });
            }
        }
    })
})

gKillerItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('select')) {
            item.classList.toggle('unchecked');
            if ([...gItems].slice(1).every(allValuesChecked)) {
                gSelect.classList.remove('unchecked');
            } else if ([...gItems].slice(1).every(allValuesUnchecked)) {
                gSelect.classList.add('unchecked');
            }
        } else {
            if (gSelect.classList.contains('unchecked')) {
                gSelect.classList.remove('unchecked');
                gItems.forEach(item => {
                    item.classList.remove('unchecked');
                });
            } else {
                gSelect.classList.add('unchecked');
                gItems.forEach(item => {
                    item.classList.add('unchecked');
                });
            }
        }
    })
})

function changeSelection() {
    let image = document.querySelector('.selection-image');

    if (gSelector.classList.contains('survivors')) {
        gSelector.classList.remove('survivors');
        gSelector.classList.add('killers');
        gSelector.setAttribute('title', 'Рандомайзер маньяков');
        image.setAttribute('src', 'images/killers/KillersIcon.webp');
        image.setAttribute('alt', 'Killers');
        gCharacterList = document.querySelector('.survivor-list');
    } else if (gSelector.classList.contains('killers')) {
        gSelector.classList.remove('killers');
        gSelector.classList.add('survivors');
        gSelector.setAttribute('title', 'Рандомайзер выживших');
        image.setAttribute('src', 'images/survivors/SurvivorsIcon.webp');
        image.setAttribute('alt', 'Survivors');
        gCharacterList = document.querySelector('.killer-list');
    }

    gSelect = gCharacterList.querySelector('.select');
    gItems = gCharacterList.querySelectorAll('.item');
}