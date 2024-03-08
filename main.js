var nome_Usuario = '';
var texto = document.querySelector('span');

while(nome_Usuario == '' ){ // || nome_Usuario == null
    nome_Usuario = prompt('Qual é o seu nome?');
}

if(nome_Usuario == null){ //se o usuario for null ele irá ficar vazio 
texto.textContent = 'usuário'; 
}else{
texto.textContent = nome_Usuario; 
}

