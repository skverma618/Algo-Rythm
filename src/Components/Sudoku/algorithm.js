export function solve(grid) {
    console.log(grid);
    const isValid = (grid, row, col, c) => {
        for (var i = 0; i < grid.length; i++) {
            if (grid[i][col] === c) {
                return false;
            }
            if (grid[row][i] === c) {
                return false;
            }
        }

        const local_row = row - (row % 3);
        const local_col = col - (col % 3);

        for (let i = local_row; i < local_row + 3; i++) {
            for (let j = local_col; j < local_col + 3; j++) {
                if (grid[i][j] === c) {
                    return false;
                }
            }
        }
        return true;
    };

    const solver = (grid, changes) => {
        for (var i = 0; i < grid.length; i++)
            for (var j = 0; j < grid.length; j++) {
                if (grid[i][j] === -1) {
                    for (var c = 1; c <= 9; c++) {
                        if (isValid(grid, i, j, c) === true) {
                            grid[i][j] = c;
                            changes.push({ row: i, col: j, value: c });
                            if (solver(grid, changes)) {
                                return true;
                            } else {
                                grid[i][j] = -1;
                                changes.push({
                                    row: i,
                                    col: j,
                                    value: -1,
                                    delete: true,
                                });
                                changes.push({ row: i, col: j, value: -1 });
                            }
                        } else {
                            changes.push({
                                row: i,
                                col: j,
                                value: c,
                                delete: false,
                            });
                            changes.push({
                                row: i,
                                col: j,
                                value: -1,
                                delete: true,
                            });
                            changes.push({
                                row: i,
                                col: j,
                                value: -1,
                                delete: false,
                            });
                        }
                    }
                    return false;
                }
            }
        return true;
    };

    const changes = [];
    const solvable = solver(grid, changes);
    console.log(grid);
    return [solvable, changes];
}
