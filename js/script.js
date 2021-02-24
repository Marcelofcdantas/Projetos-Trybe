var nota = prompt("insira sua nota");
if (nota >=1 && nota<=100){
    if (nota>=80){
        window.alert("Parabéns, você foi aprovado!");
    }
    else if (nota<60){
        console.log("Você foi reprovado");
    }
    else {
        console.log("Você está na nossa lista de espera");
    };
};