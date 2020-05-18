let myarray = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(a){
  let indice = 0;
  let vezes = 0;
  let vezes2= 0;
  for(let i = 0; i < a.length; i++){
    for (let j = 1; j < a.length; j++){
      if(a[i]== a[j]){
        vezes + 1;
      }
      if(vezes > vezes2){
        indice = i;
      }
    }
  }
  console.log(a[indice]);
  return(a[indice]);



}maisRepetido(myarray);