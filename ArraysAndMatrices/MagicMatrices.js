function magicMatrices(matrix) {
    let len = matrix[0].length;

    if (matrix.length !== len) {
        return false;
    }

    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += Number(matrix[0][i]);
    }

    for (let i = 1; i < len; i++) {
        let currentSum = matrix[i].reduce((a, b) => a + b);

        if (currentSum !== sum) {
            return false;
        }

        currentSum = 0;

        for (let j = 0; j < len; j++) {
            currentSum += Number(matrix[j][i]);
        }

        if (currentSum !== sum) {
            return false;
        }
    }

    return true;
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log("-".repeat(15));
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log("-".repeat(15));
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));