let n = 3;
function somaNumbers(a){
  let somatoria = 0;
  for (let i = 1; i <= a; i++){
    somatoria += i;
  }
  console.log(somatoria);
  return(somatoria);

}somaNumbers(n);