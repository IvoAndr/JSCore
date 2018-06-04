function diagonalAttack(arr) {
    let matrix = [];
    let size = arr.length;

    for (let i = 0; i < size; i++) {
        let currentRow = Array.from(arr[i].split(" ").filter(s => s !== ""));
        matrix.push(currentRow);
    }

    let leftDiagonal = function() {
                    let sum = 0;

                    for (let i = 0; i < size; i++) {
                        sum += Number(matrix[i][i]);
                    }

                    return sum;
                };

    let rightDiagonal = function() {
        let sum = 0;
        let j = 0;

        for (let i = size - 1; i >= 0; i--) {
            sum += Number(matrix[j][i]);
            j++;
        }

        return sum;
    };

    if (leftDiagonal() === rightDiagonal()) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                 if (j !== i && j !== size - 1 - i) {
                     matrix[i][j] = leftDiagonal();
                 }
            }
        }
    }

    matrix.forEach(function(r) {
        console.log(r.join(" "));
        });

}

diagonalAttack(["5 3 12 3 1", "11 4 23 2 5", "101 12 3 21 10", "1 4 5 2 2", "5 22 33 11 1"]);
console.log("-".repeat(15));
diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);