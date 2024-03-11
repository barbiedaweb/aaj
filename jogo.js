let numeroSecreto = 9;

let chute = '';

while (chute == '' || chute == null){
    chute = prompt('Escolha um número 0 a 10'); // se o chute for vazio ou nulo ele irá continuar perguntando
}

if(numeroSecreto == chute){
    alert('Parabens, você acertou!!!'); 
} else{
    alert('Que triste, você errou :(');
}

