import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Index.module.css";
import Header from "../Graph/Header/Header";
import graph from "../../images/graph.png";
import sorting from "../../images/sorting1.png";
import sudoku from "../../images/sudoku1.jpg";
import nqueen from "../../images/nqueen1.png";
export default function Index() {
    return (
        <div>
            <div className={classes.header}>
                <Header></Header>
            </div>
            <NavLink to="/graph">
                <div className={classes.responsive}>
                    <div className={classes.gallery}>
                        <img
                            src={graph}
                            alt="Graph Traversals"
                            width="600"
                            height="400"
                        />
                        <div className={classes.desc}>Graph Traversals</div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/sorting">
                <div className={classes.responsive}>
                    <div className={classes.gallery}>
                        <img
                            src={sorting}
                            alt="Sorting Algorithms"
                            width="600"
                            height="400"
                        />
                        <div className={classes.desc}>Sorting Algorithms</div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/sudoku">
                <div className={classes.responsive}>
                    <div className={classes.gallery}>
                        <img
                            src={sudoku}
                            alt="Sudoku Solver"
                            width="600"
                            height="400"
                        />
                        <div className={classes.desc}>Sudoku Solver</div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/nqueens">
                <div className={classes.responsive}>
                    <div className={classes.gallery}>
                        <img
                            src={nqueen}
                            alt="N Queens"
                            width="600"
                            height="400"
                        />

                        <div className={classes.desc}> N Queens </div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/segment">
                <div className={classes.responsive}>
                    <div className={classes.gallery}>
                        <img
                            src={nqueen}
                            alt="segment trees"
                            width="600"
                            height="400"
                        />

                        <div className={classes.desc}> segment tree </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}
