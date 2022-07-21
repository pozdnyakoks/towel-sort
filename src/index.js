
// You should implement your task here.

module.exports = function towelSort (matrix = []) {

   let newAr = [];
   for (let i = 0; i < matrix.length; i++) {
    if (i % 2 > 0 ) {
    matrix[i].reverse();
    }
    newAr = newAr.concat(matrix[i])
   } 
  return newAr;
}
