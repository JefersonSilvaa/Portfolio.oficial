// sistema de disparo para menu-mobile

function clica(){
    const btn = document.getElementById("btn-menu");
    btn.classList.toggle('ativar');
    menuDiv.classList.toggle("abrir");
};
const menuDiv = document.getElementById("header_top_mobile");
menuDiv.addEventListener("click", clica);