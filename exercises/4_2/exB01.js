let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let troca;
for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      troca = numbers[i];
  
      numbers[i] = numbers[j];
      numbers[j] = troca;
    }
  }
}console.log(numbers);
