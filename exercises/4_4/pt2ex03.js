let myarray = [2, -3, 6, 7, 10, 0, 1];

function menorIndice(a){
  let maiorNumero = a[0];
  let indice = 0;
  for (let i = 0; i < a.length; i++){
    if (a[i] < maiorNumero){
    maiorNumero = a[i];
    indice = i;
    }
  }
    console.log(maiorNumero);
  console.log(indice);
  return (indice);
}
maiorIndice(myarray);