import React, { useState, useEffect, useSyncExternalStore } from "react";
import classes from "./Grid.module.css";
import Node from "../Node/Node";
import BFS from "../Algorithms/BFS/BFS";
import node_classes from "../Node/Node.module.css";
import DFS from "../Algorithms/DFS/DFS";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Home({
    grid,
    startNode,
    finishNode,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
    movestart,
}) {
    return (
        <div className={classes.grid}>
            {grid.map((row, idx) => {
                return (
                    <div key={idx} className={classes.row}>
                        {row.map((value) => {
                            const {
                                col,
                                row,
                                isStart,
                                isFinish,
                                isWall,
                                weight,
                            } = value;
                            return (
                                <Node
                                    key={`${row}-${col}`}
                                    col={col}
                                    row={row}
                                    isStart={
                                        row == startNode[0] &&
                                        col == startNode[1]
                                    }
                                    isFinish={
                                        row == finishNode[0] &&
                                        col == finishNode[1]
                                    }
                                    isWall={isWall}
                                    onMouseDown={() =>
                                        handleMouseDown(row, col)
                                    }
                                    onMouseEnter={() =>
                                        handleMouseEnter(row, col)
                                    }
                                    onMouseUp={() => handleMouseUp()}
                                    weight={weight}
                                    // movestart={(r, c) => {
                                    //     movestart(r, c);
                                    // }}
                                ></Node>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
