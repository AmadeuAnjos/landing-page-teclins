// function open menu mobile / função para abrir menu mobile
function abrirMenu() {
    
    if(item.style.display == 'block'){
        item.style.display = 'none';
    }else {
        item.style.display = 'block'
    }
}

//funciton for carrousel_one automatic / função para carrosel_um automatico

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)

function nextImage() {
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

//funciton for carrousel_two automatic / função para carrosel_dois automatico

let count2 = 5;
document.getElementById("radio5").checked = true;

setInterval( function(){
    nextImage2();
}, 4000)

function nextImage2() {
    count2++;
    if(count2 > 8){
        count2 = 5;
    }
    document.getElementById("radio"+count2).checked = true;
}

