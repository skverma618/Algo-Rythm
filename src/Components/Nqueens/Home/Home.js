import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";
import AlgoBox from "../../AlgoBox/AlgoBox";
import { solve } from "../algorithm";

export default function Home() {
    const [size, setsize] = useState(8);
    const [grid, setgrid] = useState([]);

    const startalgo = () => {
        const [is, animations] = solve(grid);
        if (is) {
            const len = animations.length;
            for (let i = 0; i < len; i++) {
                const [idx, row, col] = animations[i];
                const grid_cell = document.getElementById(`${row}-${col}`);
                if (idx === 2) {
                    // setTimeout(() => {
                    //     const classlist = [];
                    //     classlist.push(classes.redqueen);
                    //     grid_cell.classList = [classlist.join(" ")];
                    // }, i * 100);
                } else if (idx === 1) {
                    const classlist = [];
                    if ((row + col) % 2 === 0) {
                        classlist.push(classes.cell_white_queen);
                    } else {
                        classlist.push(classes.cell_black_queen);
                    }
                    setTimeout(() => {
                        grid_cell.classList = [classlist.join(" ")];
                    }, i * 100);
                } else if (idx === 3) {
                    const classlist = [];
                    if ((row + col) % 2 === 0) {
                        classlist.push(classes.cell_white);
                    } else {
                        classlist.push(classes.cell_black);
                    }
                    setTimeout(() => {
                        grid_cell.classList = [classlist.join(" ")];
                    }, i * 100);
                }
            }
        }
    };

    const resetgrid = () => {
        const highestId = window.setTimeout(() => {
            for (let i = highestId; i >= 0; i--) {
                window.clearInterval(i);
            }
        }, 0);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const grid_cell = document.getElementById(`${i}-${j}`);
                const classlist = [];
                if ((i + j) % 2 === 0) {
                    classlist.push(classes.cell_white);
                } else {
                    classlist.push(classes.cell_black);
                }
                grid_cell.classList = [classlist.join(" ")];
            }
        }
        changeSize(size);
    };

    const changeSize = (sz) => {
        const array = [];
        console.log("hi");
        for (let i = 0; i < sz; i++) {
            const a = [];
            for (let j = 0; j < sz; j++) {
                a.push(0);
            }
            array.push(a);
        }
        setsize(sz);
        setgrid(array);
    };

    useEffect(() => {
        changeSize(8);
    }, []);

    return (
        <div className={classes.container}>
            <Header></Header>
            <div className={classes.midsection}>
                <SideNav
                    startalgo={startalgo}
                    resetgrid={resetgrid}
                    changesize={changeSize}
                ></SideNav>
                <div className={classes.grid}>
                    {grid.map((row, i) => {
                        return (
                            <div className={classes.row} key={i}>
                                {row.map((col, j) => {
                                    return (
                                        <div
                                            className={
                                                (i + j) % 2 == 1
                                                    ? classes.cell_black
                                                    : classes.cell_white
                                            }
                                            key={`${i}-${j}`}
                                            id={`${i}-${j}`}
                                        ></div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <AlgoBox algo="nqueens"></AlgoBox>
            </div>
        </div>
    );
}
