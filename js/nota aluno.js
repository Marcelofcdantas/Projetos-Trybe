let resultado = document.querySelector('h1');
nota = prompt('Digite uma nota ')
if (nota>=1 && nota<=100){
    if (nota>=80){
        resultado.innerHTML = 'Parabéns, você foi aprovado!';        
    } 
    else if (nota<60){
        resultado.innerHTML = 'Você foi reprovado';
    }
    else {
        resultado.innerHTML = 'Você está na nossa lista de espera';
    }
}
