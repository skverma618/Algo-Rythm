import React from "react";
import classes from "./Header.module.css";
export default function Header() {
    return (
        <React.Fragment>
            <div className={classes.header}>
                <div className={classes.logo}>Algo Visualizer</div>
            </div>
        </React.Fragment>
    );
}
