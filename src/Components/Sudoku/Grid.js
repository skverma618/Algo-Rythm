import React, { useState, useEffect } from "react";
import classes from "./Grid.module.css";

const Sudoku = ({ onChangeHandler, sudokuArray, error }) => {
    return (
        <>
            <div className={classes.sudo_container}>
                <table>
                    <tbody id="arr_id">
                        {sudokuArray.map((el, row) => {
                            return (
                                <tr
                                    className={
                                        row % 3 === 2 ? classes.bold_bottom : ""
                                    }
                                    key={row}
                                >
                                    {sudokuArray.map((el, col) => {
                                        return (
                                            <td
                                                className={
                                                    col % 3 === 2
                                                        ? classes.bold_right
                                                        : ""
                                                }
                                                key={col}
                                            >
                                                <input
                                                    id={`${row}-${col}`}
                                                    onChange={(event) => {
                                                        onChangeHandler(
                                                            event,
                                                            row,
                                                            col
                                                        );
                                                    }}
                                                    value={
                                                        sudokuArray[row][
                                                            col
                                                        ] === -1
                                                            ? ""
                                                            : sudokuArray[row][
                                                                  col
                                                              ]
                                                    }
                                                    className={`${
                                                        classes.cell
                                                    } ${
                                                        sudokuArray[row][
                                                            col
                                                        ] !== -1
                                                            ? classes.fixed
                                                            : ""
                                                    }`}
                                                />
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <p>{error}</p>
                {/* <button onClick={()=>{solve(sudokuArray)}} > Solve </button> */}
            </div>
        </>
    );
};

export default Sudoku;
