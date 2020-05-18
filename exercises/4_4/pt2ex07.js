function verificaFimPalavra(word, ending){
  let j = 0;
  let nLetras = 0;
  let resul = false;
  let diference = (word.length - ending.length);
  
  if(word.length > ending.length){
    for(let i = diference; i < word.length;i++ ){
      if(word[i] === ending[j]){
        nLetras += 1;
        j += 1;
      }else{
        j += 1;
      }
    }
      console.log(nLetras)
      if (nLetras === ending.length){
        resul = true;
        console.log(resul);
      }else{
        resul = false;
        console.log(resul);
      } 
      return(resul);
    }else{
      console.log("ação não é valida");
    }
    
}
verificaFimPalavra("mat", "t");