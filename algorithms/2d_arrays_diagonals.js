function diagonalDifference(arr) {
    let sumDiag1 = 0;
    let sumDiag2 = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let k = 0; k < arr[i].length; k++) {
            if(i === k) {
                sumDiag1 += arr[i][k];
            }
            if( (arr[i].length - 1 - i) === k) {
                sumDiag2 += arr[i][k];
            }
        }
    }

    return Math.abs(sumDiag1 - sumDiag2);
}

console.log(diagonalDifference(
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
));



