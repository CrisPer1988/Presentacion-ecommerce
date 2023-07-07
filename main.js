// function sum(array) {
//     let result = 0
//    for (let i = 0; i < array.length; i++) {
//     if(array[i])
//     result = result + array[i]
//    }
//    return result
// }

// console.log(sum([1, 2, 3, 4, 5]));



function sum(array, index = 0) {
  if (index === array.length) {
    return 0;
  }
  
  return array[index] + sum(array, index + 1);
}

console.log(sum([1, 2, 3, 4, 6]));