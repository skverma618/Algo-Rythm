export function solve(grid) {
    let N = grid.length;
    function isSafe(board, row, col) {
        let i, j;
        for (i = 0; i < col; i++) {
            if (board[row][i] == 1) return false;
        }
        for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
            if (board[i][j]) return false;
        for (i = row, j = col; j >= 0 && i < N; i++, j--)
            if (board[i][j]) return false;

        return true;
    }

    function solveNQUtil(board, col, animations) {
        if (col >= N) return true;
        for (let i = 0; i < N; i++) {
            if (isSafe(board, i, col) == true) {
                board[i][col] = 1;
                animations.push([1, i, col]);
                if (solveNQUtil(board, col + 1, animations) == true)
                    return true;
                animations.push([2, i, col]);
                animations.push([3, i, col]);
                board[i][col] = 0;
            } else {
                animations.push([1, i, col]);
                animations.push([2, i, col]);
                animations.push([3, i, col]);
            }
        }
        return false;
    }

    const animations = [];
    if (solveNQUtil(grid, 0, animations) == false) {
        return [false, []];
    } else {
        return [true, animations];
    }
}
