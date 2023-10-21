for(let j = 0; j < 8; j++)
{
for(let i = localStorage.length - 1; i >= 0; i--)
{

let element = document.createElement('div');
element.classList.add('shavaObj'+ String(i));

const img = document.createElement('img');
img.src = JSON.parse(localStorage.getItem(localStorage.key(i))).imageSrc;
element.append(img);

const text = document.createTextNode(JSON.parse(localStorage.getItem(localStorage.key(i))).composition);
element.append(text)

let shavaList = document.getElementById('shavaList');
shavaList.appendChild(element);

}
}