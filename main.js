var nome_Usuario = '';
var texto = document.querySelector('span');

while(nome_Usuario == '' ){ // || nome_Usuario == null
    nome_Usuario = prompt('Qual é o seu nome?');
}

texto.textContent = nome_Usuario;