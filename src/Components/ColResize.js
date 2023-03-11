import React from "react";
import classes from "./ColResize.module.css";
import burger from "../images/burger1.png";
import dots from "../images/dots2.png";
export default function ColResize() {
    return (
        <React.Fragment>
            <div className={classes.outer}>
                <div className={classes.col_resize_images}>
                    <img src={dots}></img>
                </div>
                <div className={classes.inner}></div>
            </div>
        </React.Fragment>
    );
}
