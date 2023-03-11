import React from "react";
import classes from "./Node.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import GpsFixedTwoToneIcon from "@mui/icons-material/GpsFixedTwoTone";
import PlaceTwoToneIcon from "@mui/icons-material/PlaceTwoTone";
export default function Node({
    col,
    row,
    isStart,
    isFinish,
    isWall,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    movestart,
    weight,
}) {
    const classlist = [classes.node];
    if (isStart) {
        classlist.push(classes.start);
    }
    if (isFinish) {
        classlist.push(classes.finish);
    }
    if (isWall) {
        classlist.push(classes.wall);
    }

    return (
        <div
            id={`node-${row}-${col}`}
            className={classlist.join(" ")}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
            onMouseUp={onMouseUp}
        >
            {isStart ? (
                <div>
                    <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                </div>
            ) : null}
            {isFinish ? (
                <div>
                    <GpsFixedTwoToneIcon></GpsFixedTwoToneIcon>
                </div>
            ) : null}
            {weight > 1 ? weight : null}
        </div>
    );
}
