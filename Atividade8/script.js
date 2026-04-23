maisVelho = 0;
maisNovo = 100;
let numMasc=0;
let numFem=0;
let numOut=0;
let idadesSomadas=0;
let pessimos=0;
let otimobom=0;
let qtTeste = 2;

for (i = 0; i < qtTeste; i++) {


    let aux = parseInt(prompt(`Idade pessoa ${i + 1} : `));

    idadesSomadas += aux;

    if (aux > maisVelho) {
        maisVelho = aux;
    }

    if (aux < maisNovo) {
        maisNovo = aux;
    }

    let auxSexo = prompt(`Insira o sexo da pessoa ${i + 1}.\nFeminino = F\nMasculino = M\nOutros = O:`);

    if (auxSexo == 'M') {
        numMasc++;
    } else {
        if (auxSexo == 'F') {
            numFem++;
        } else {
            numOut++;
        }
    }

    let auxOpin = prompt(`Insira sua opiniao:\nótimo = 4\n bom=3 \n regular=2\n péssimo=1\n`);

    if (auxOpin == '1') {
        pessimos++;
    } else {
        if (auxOpin == '3' || auxOpin == '4') {
            otimobom++;
        }
    }
}

alert("Media das Idades: " + (idadesSomadas / qtTeste) +
    "\nIdade da Pessoa mais velha: " + maisVelho +
    "\nIdade da Pessoa mais nova: " + maisNovo +
    "\nQuantidade de pessimos: " + pessimos +
    "\nPorcentagem de bons e otimos: " + ((otimobom * 100) / qtTeste) + "%" +
    `\nNumero de masculinos: ${numMasc} \nNumero de femininos: ${numFem}\nNumero de outros: ${numOut}`);