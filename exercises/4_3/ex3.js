let char1 ="*";
let char2 = "";
let space = " "
let n = 5;
let m = n;
if (n > 1){
  for(let i = 1; i <= n; i++){
   if(i < m){
     char2 += space;
   }else{
     char2 += char1;
     console.log(char2);
 
     m--;
     i = 1;
     
   }
  }

}