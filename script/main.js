
function abrirMenu() {
    
    if(item.style.display == 'block'){
        item.style.display = 'none';
    }else {
        item.style.display = 'block'
    }
}

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