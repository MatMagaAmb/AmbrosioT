let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let troca;
j = 1;
for (let i = 0; i < numbers.length; i++) {
  if(j < numbers.length){
  
      troca = numbers[i] * numbers[j];
  
      numbers[i] = troca;
      j += 1;
  }else{
    troca = numbers[i] * 2;
  
    numbers[i] = troca;
  }
 }
console.log(numbers);
