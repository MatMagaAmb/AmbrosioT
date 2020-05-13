let numbers = [5, 9, 3, 19, 70, 8, 101, 2, 35, 27];
let quantN = 0;
for (let i = 0; i < numbers.length; i++){
    if ((numbers[i] % 2) !== 0){
        quantN++;
    }
}
console.log("o quantidade de numeros impares é " + quantN);