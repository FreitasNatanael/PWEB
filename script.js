function maiorde3( num1 , num2 , num3 ){
  return Math.max(num1, num2, num3);
}

function crescente(num1, num2 , num3){
    let array = [num1,num2,num3];
    return array.sort((a, b) => a - b);
}
 function ehPalindromo( string ){

    let stringInv = string.ToUpperCase(string.replace(/\s+/g, ''));
    stringInv = stringInv.split("").reverse().join("");
    if(string==stringInv){return true;}
    else{return false;}
}

function