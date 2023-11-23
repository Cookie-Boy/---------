let burgerMenu = document.querySelector('.burgerMenu');
let temno = document.querySelector('.temno');
let menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', function() { 
                                                    menu.classList.toggle('active');
                                                    temno.classList.toggle("active");})

temno.addEventListener('click', function() { 
                                                    menu.classList.toggle('active');
                                                    temno.classList.toggle("active");})