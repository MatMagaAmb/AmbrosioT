let myarray = [2, 30, 6, 7, 1, 2];

function maiorIndice(a){
  let maiorNumero = a[0];
  let indice = 0;
  for (let i = 0; i < a.length; i++){
    if (a[i] >maiorNumero){
    maiorNumero = a[i];
    indice = i;
    }
  }
    console.log(maiorNumero);
  console.log(indice);
  return (indice);
}
maiorIndice(myarray);