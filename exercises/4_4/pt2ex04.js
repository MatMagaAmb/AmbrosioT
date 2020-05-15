let myarray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function maiorPalavra(a){
  let palavra = a[0];
  let indice = 0;
  for (let i = 0; i < a.length; i++){
    if (a[i].length > palavra.length){
    palavra = a[i];
    indice = i;
    }
  }
    console.log(palavra);
  console.log(indice);
  return (indice);
}
maiorIndice(myarray);