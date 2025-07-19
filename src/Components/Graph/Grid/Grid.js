import React from "react";
import classes from "./Grid.module.css";
import Node from "../Node/Node";

export default function Grid({
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
            <div className={classes.gridContainer}>
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
                                            row === startNode[0] &&
                                            col === startNode[1]
                                        }
                                        isFinish={
                                            row === finishNode[0] &&
                                            col === finishNode[1]
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
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            
            {/* Control Panel */}
            <div className={classes.controlPanel}>
                <div className={classes.controlPanelContent}>
                    <div className={classes.legend}>
                        <div className={classes.legendItem}>
                            <div className={`${classes.legendColor} ${classes.start}`}></div>
                            <span className={classes.legendLabel}>Start</span>
                        </div>
                        <div className={classes.legendItem}>
                            <div className={`${classes.legendColor} ${classes.end}`}></div>
                            <span className={classes.legendLabel}>End</span>
                        </div>
                        <div className={classes.legendItem}>
                            <div className={`${classes.legendColor} ${classes.wall}`}></div>
                            <span className={classes.legendLabel}>Wall</span>
                        </div>
                        <div className={classes.legendItem}>
                            <div className={`${classes.legendColor} ${classes.weight}`}></div>
                            <span className={classes.legendLabel}>Weight</span>
                        </div>
                        <div className={classes.legendItem}>
                            <div className={`${classes.legendColor} ${classes.visited}`}></div>
                            <span className={classes.legendLabel}>Visited</span>
                        </div>
                        <div className={classes.legendItem}>
                            <div className={`${classes.legendColor} ${classes.path}`}></div>
                            <span className={classes.legendLabel}>Path</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Indicator */}
            <div className={classes.statusIndicator}>
                <div className={classes.statusContent}>
                    <div className={`${classes.statusIcon} ${classes.ready}`}></div>
                    <span className={classes.statusText}>Ready to visualize</span>
                </div>
            </div>
        </div>
    );
}
