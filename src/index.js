
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let a = [];
    if (matrix === undefined) return [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (let x = 0; x < matrix[i].length; x++) {
                a.push(matrix[i][x]);
            }
        }
        else {
            for (let x = matrix[i].length - 1; x >= 0; x--) {
                a.push(matrix[i][x]);
            }
        }
    }
    return a;
}
