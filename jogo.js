let numeroSecreto = Math.floor(Math.random() * 10); // escolher um número inteiro aleatorio
console.log(numeroSecreto); // pra o console conversar comigo e dizer qual o número secreto

let chute = '';

while (chute == '' || chute == null){ 
    chute = prompt('Escolha um número 0 a 10'); // se o chute for vazio ou nulo ele irá continuar perguntando
}

if(numeroSecreto == chute){  
    alert('Parabens, você acertou!!!'); // se o chute for certo irá aparecer 'Parabens, você acertou!!!'
} else{
    alert('Que triste, você errou :('); // se o chute for errado irá aparecer 'Que triste, você errou :('
}

