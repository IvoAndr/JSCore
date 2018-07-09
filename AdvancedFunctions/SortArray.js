function sortArray(nums, order) {
    if (order === "asc") {
        return nums.sort((a, b) => a - b);
    }

    return nums.sort((a, b) => b -a);
}

console.log(sortArray([14, 7, 17, 6, 8], "asc"));
console.log("-".repeat(15));
console.log(sortArray([14, 7, 17, 6, 8], "desc"));