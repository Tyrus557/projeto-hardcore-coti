//alert('JS Carregado');

var menu = document.querySelector('.menu');
var btnMenu = document.querySelector('.btn-menu');

console.log(menu);
console.log(btnMenu);

function toggleMenu(){
    //console.log('Função acionada');

    menu.classList.toggle('show');
    btnMenu.classList.toggle('x');
}

function removeMenu(){

    menu.classList.remove('show');
    btnMenu.classList.remove('x');
}






btnMenu.addEventListener('click',toggleMenu);

menu.addEventListener('click',removeMenu);