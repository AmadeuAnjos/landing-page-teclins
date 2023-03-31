
function abrirMenu() {
    
    if(item.style.display == 'block'){
        item.style.display = 'none';
    }else {
        item.style.display = 'block'
    }
}

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    if(idx > img.length - 1){
        idx = 0;
    }
    imgs.style.transform = `translate(${idx * 95}%)`;
}

setInterval(carrossel, 1800);