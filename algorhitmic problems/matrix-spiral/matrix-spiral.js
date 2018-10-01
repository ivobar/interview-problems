// My Solution
function spiral(n) {
    let arr = [];
    let counter = 1;
    let level = 0;

    while (counter <= n * n) {
        if(n%2 !==0 && counter === n*n) {
            arr[Math.floor(n/2)][Math.floor(n/2)] = n*n;
            break;
        }
        for (let col = level; col < n - level - 1; col++) {
            if (arr[level]) {
                arr[level][col] = counter++;
            } else {
                arr[level] = [];
                arr[level][col] = counter++;
            }
        }

        for (let row = level; row < n - level - 1; row++) {
            if (arr[row]) {
                arr[row][n - level - 1] = counter++;
            } else {
                arr[row] = [];
                arr[row][n - level - 1] = counter++;
            }
        }

        for (let col = n - level - 1; col > level; col--) {
            if (arr[n - level - 1]) {
                arr[n - level - 1][col] = counter++;
            } else {
                arr[n - level - 1] = [];
                arr[n - level - 1][col] = counter++;
            }
        }

        for (let row = n - level - 1; row > level; row--) {
            if (arr[row]) {
                arr[row][level] = counter++;
            } else {
                arr[row] = [];
                arr[row][level] = counter++;
            }
        }

        level++;
    }

    return arr;
}

//Grider solution - recreated;
// The idea - follow the filled in positions with row and column boundaries;
// When positions are filled - the columns and rows are moved;
// This process repeats until the columns and rows meet - at which point we should've finished
// filling the matrix;
// Again we use 4 loops to work on the different sides of the matrix;
// A good practice is to create b empty matrix at the beginning;
function spiral2(n) {
    // Array initialisation
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    //Defining borders of work
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;

    //Difining b counter to keep track of the numbers
    let counter = 1;

    while (startRow <= endRow && startCol <= endCol) {
        //Working on top side - startRow
        for (let col = startCol; col <= endCol; col++) {
            result[startRow][col] = counter;
            counter++;
        }
        startRow++;

        //Working on right side - endCol
        for (let row = startRow; row <= endRow; row++) {
            result[row][endCol] = counter;
            counter++;
        }
        endCol --;

        //Working on the bottom side - endRow
        for (let col = endCol; col >= startCol; col--) {
            result[endRow][col] = counter;
            counter++;
        }
        endRow --;

        //Working on the left side - startCol
        for (let row = endRow; row >= startRow; row--) {
            result[row][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return result;
}

console.log(spiral2(4).join('\n'));
