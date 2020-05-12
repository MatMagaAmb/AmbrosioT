let val1= 10, val2 = 0;

if (val1 <= 0 || val2 <= 0 ){
    console.log("ouve um erro no valor dos produtos, insira um valor valido")
}else{
    let valorDoImposto = ((val1 / 100)*20);
    let lucro = (val2 - (val1 - valorDoImposto) );
    console.log(lucro * 1000);
}