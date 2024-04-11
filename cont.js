const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);


for(let i = 0; i<botoes.length; i++) { //se 
console.log(i);
botoes[i].onclick = function(){
for (let j = 0; j < botoes.length; j++) {
botoes[j].class.List.remove('ativo');
}
    botoes[i].classList.add('ativo');
    }
}

