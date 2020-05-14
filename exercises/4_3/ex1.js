let prt ='*';
let prt2 = ""
let n = 5;

if(n > 1){
  for(i = 0; i < n; i++){
    prt2 += prt;
  }
}else{
  console.log("operação invalida");
}
for (let j = 0; j < n;j++){
  console.log(prt2);
}