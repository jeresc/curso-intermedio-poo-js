// Recursividad

// function recursiva() {
//   if (/* Validacion */) {
//     Llamados recursivos
//   } else {
//     Llamados normales, sin recursividad
//   }
// }

const nums = [0,1,2,3,4,5,64,4,432,65453,3]

let num = 0;
for (let index = 0; index < nums.length; index++) {
  num = nums[index];
  console.log({index, num})
}

function recursiva(numsArray) {
  if (numsArray.length != 0) {
    const firstNum = numsArray[0];
    console.log(firstNum);
    numsArray.shift();
    return recursiva(numsArray)
  }
}