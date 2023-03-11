import React, { useState, useEffect } from "react";
import Header from "../../Graph/Header/Header";
import SideNav from "../SideNav/SideNav";
import AlgoBox from "../../AlgoBox/AlgoBox";
import Grid from "../Grid";
import classes from "../../Graph/Home/Home.module.css";
import { solve } from "../algorithm";

const deepCopy = (arr) => {
    return JSON.parse(JSON.stringify(arr));
};

const Home = () => {
    let initial = [
        [-1, 5, -1, 9, -1, -1, -1, -1, -1],
        [8, -1, -1, -1, 4, -1, 3, -1, 7],
        [-1, -1, -1, 2, 8, -1, 1, 9, -1],
        [5, 3, 8, 6, -1, 7, 9, 4, -1],
        [-1, 2, -1, 3, -1, 1, -1, -1, -1],
        [1, -1, 9, 8, -1, 4, 6, 2, 3],
        [9, -1, 7, 4, -1, -1, -1, -1, -1],
        [-1, 4, 5, -1, -1, -1, 2, -1, 9],
        [-1, -1, -1, -1, 3, -1, -1, 7, -1],
    ];

    const [sudokuArray, setSudokuArray] = useState(deepCopy(initial));
    const [error, seterror] = useState("");

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

    const onChangeHandler = (event, row, col) => {
        seterror("");
        const grid = deepCopy(sudokuArray);
        var value = event.target.value;
        if (value === "") {
            value = -1;
            grid[row][col] = value;
            setSudokuArray(grid);
        } else {
            value = parseInt(value);
            if (Number.isInteger(value) && value >= 1 && value <= 9) {
                if (isValid(grid, row, col, value)) {
                    grid[row][col] = value;
                    setSudokuArray(grid);
                }
            }
        }
    };

    const runAnimation = () => {
        const [solvable, changes] = solve(sudokuArray);
        if (solvable) {
            const len = changes.length;
            for (let i = 0; i < len; i++) {
                const obj = changes[i];
                const grid_cell = document.getElementById(
                    `${obj.row}-${obj.col}`
                );
                if (obj.delete) {
                    setTimeout(() => {
                        const grid_style = grid_cell.style;
                        grid_style.color = "red";
                    }, i * 10);
                } else {
                    setTimeout(() => {
                        if (obj.value == -1) {
                            grid_cell.value = "";
                            const grid_style = grid_cell.style;
                            grid_style.color = "black";
                        } else {
                            grid_cell.value = obj.value;
                            const grid_style = grid_cell.style;
                            grid_style.color = "black";
                        }
                    }, i * 10);
                }
            }
        } else {
            seterror("no solution");
        }
    };

    const clickHandler = () => {
        runAnimation();
    };

    const resetGrid = () => {
        seterror("");
        const highestId = window.setTimeout(() => {
            for (let i = highestId; i >= 0; i--) {
                window.clearInterval(i);
            }
        }, 0);
        setSudokuArray(initial);
    };

    return (
        <div className={classes.container}>
            <Header></Header>
            <div className={classes.midsection}>
                <SideNav
                    clickHandler={clickHandler}
                    resetGrid={resetGrid}
                ></SideNav>
                <Grid
                    error={error}
                    onChangeHandler={onChangeHandler}
                    sudokuArray={sudokuArray}
                ></Grid>
                <AlgoBox algo="sudoku"></AlgoBox>
            </div>
        </div>
    );
};

export default Home;
