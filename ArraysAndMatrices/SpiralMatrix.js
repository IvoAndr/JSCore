function spiralMatrix(rows, cols) {
    let matrix = [];
    let start = 1;

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];

        for (let j = 0; j < cols; j++) {
            matrix[i][j] = start;
            start++;
        }

        let arr = Array.from(matrix[i].toString().split(", ").filter(n => n !== "")).join(" ");
        console.log(arr);
    }

}

spiralMatrix(5, 5);
console.log("-".repeat(15));
spiralMatrix(3, 3);