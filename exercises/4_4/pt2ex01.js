function  palindromo(a){
  let n = "";
  
  for(let i = a.length - 1; i >= 0; i-- ){
    n += a[i];  
  }

  let result;
  if(n === a){
    result = true;
  }else{
    result = false;
  }
  console.log(result)
  return (result)

}
palindromo("arara");