while (true){
Jogador = (prompt("Insira sua opção: \n1 - Pedra \n2 - Papel \n3 - Tesoura"));

PC = Math.random().toFixed(2);

if (PC<=0.33 && Jogador==1){
    alert("O computador escolheu pedra. O resultado é empate.");
}

if (PC<=0.33 && Jogador==2){
    alert("O computador escolheu pedra. Você ganhou :)");
}

if (PC<=0.33 && Jogador==3){
    alert("O computador escolheu pedra. Você perdeu :(");
}

if (PC>0.33  && PC<=0.67 && Jogador==1){
    alert("O computador escolheu Papel. Você perdeu :(");
}
if (PC>0.33  && PC<=0.67 && Jogador==2){
    alert("O computador escolheu Papel. O resultado é empate.");
}
if (PC>0.33  && PC<=0.67 && Jogador==3){
    alert("O computador escolheu Papel. Você ganhou :)");
}

if (PC>0.67  && Jogador==1){
    alert("O computador escolheu Tesoura. Você ganhou :) ");
}
if (PC>0.67  && Jogador==2){
    alert("O computador escolheu Tesoura. Você perdeu :(");
}
if (PC>0.67  && Jogador==3){
    alert("O computador escolheu Tesoura. O resultado é empate.");
}
}