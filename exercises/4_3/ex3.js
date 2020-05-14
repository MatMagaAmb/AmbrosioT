let char1 ="*";
let char2 = "";
let space = " "
let n = 5;
let m = n;

if (n > 0){
  for(let i = 0; i < n; i++){
    m -= 1;
    for(let j = 0; j < n; j++){
      if(j < m){
      char2 += space;
      }else{
       char2 += char1;
      }
    }
    console.log(char2);
    char2 = "";
    
  }

}