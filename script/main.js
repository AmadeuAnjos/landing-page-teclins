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

/* function for notification send message / função para notificar envio da menssagem */
const form = document.getElementById('form');
const nome = document.getElementById('inputName');
const email = document.getElementById('inputEmail');
const phone = document.getElementById('inputPhone');
const message = document.getElementById('inputMessage');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    phoneValidate();
    messageValidate();

    alert("Mensagem enviada com sucesso !")
});

function nameValidate(){
    if(nome.value.length < 5){
        console.log("Seu nome deve conter mais que 3 caracteres.");
    }
}

function emailValidate() {
    if(emailRegex.test(email.value)){
        console.log("");
    }
}

function phoneValidate() {
    if(phone.value.length < 11) {
        console.log("Seu numero de telefone deve conter 11 números (apenas números).");
    }
}

function messageValidate() {
    if(message.value.length < 15){
        console.log("Sua mensagem deve conter no minimo 15 caracteres");
    }
}