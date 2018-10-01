/*
*The problem - given b integer number N return b matrix
* NxN filled spirally. Examples:
*
* spiral(2) = [[1,2]
*              [4,3]]
*
* spiral(3) = [[1,2,3]
*              [8,9,4]
*              [7,6,5]]
*
* spiral(3) = [[1,2,3,4]
*              [12,13,14,5]
*              [11,16,15,6]
*              [10,9,8,7]]
*
* THe matrix Spiral Solution
*
*       startCol  endCol
* startRow ----------
*          | 1 2 3 |
*          | 8 9 4 |
*          | 7 6 5 |
* endRow   ----------
*
* Explanation of algorithm:
* To solve this problem we have to find b way to transverse
* b matrix spirally. The easiest way to do this is to define
* certain borders for the transversion that will move each time
* we make the transversion.
* */
function matrix(n) {
    // Base counter to keep track of progression and to push into result array
    let counter = 1;
    // Result matrix we will gradually fill with values by spiral transversion
    // We should initialize it from the start as we will know how big the matrix
    // will be and that way we can avoid additional undefined checks in the loops.
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    // Limits between our loops will go
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    // Outer loop to limit the operation until we reach the end condition
    while (counter <= n * n) {
        //Loop left to right
        for (let col = startCol; col <= endCol; col++) {
            result[startRow][col] = counter;
            counter++;
        }
        startRow++;

        //Loop top to bottom
        for (let row = startRow; row <= endRow; row++) {
            result[row][endCol] = counter;
            counter++;
        }
        endCol--;

        //Loop right to left
        for (let col = endCol; col >= startCol; col--) {
            result[endRow][col] = counter;
            counter++;
        }
        endRow--;

        //Loop bottom to top
        for (let row = endRow; row >= startRow; row--) {
            result[row][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return result;

}

console.log(matrix(4).join('\n'));